///
/// Copyright (C) 2023 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import interact from "interactjs";

export default class PopupsDraggable {

    private popupTargetSelectionString = ".esri-component.esri-popup";

    async activate() {
        const view = await this.getView();

        view.popup.watch("features", (features) => {
            if (features.length === 0) {
                // popup closed - reset the transform css so that it doesn't move next time the popup opens
                const elements = document.querySelectorAll(this.popupTargetSelectionString);
                if (elements && elements.length > 0) {
                    elements[0].style.transform = `translate(0px, 0px)`;
                }
            } else {
                this.setupInteractJs();
            }
        });
    }

    setupInteractJs() {
        // popup opened - first delete the old listener if applicable:
        // https://github.com/taye/interact.js/blob/main/docs/faq.md#remove--destroy--release

        if (interact.isSet(this.popupTargetSelectionString)) {
            interact(this.popupTargetSelectionString).unset();
        }

        // setup the new listener:
        const position = {x: 0, y: 0};
        interact(this.popupTargetSelectionString).draggable({
            allowFrom: '.header-container',
            listeners: {
                // start (event) {
                //   console.log(event.type, event.target)
                // },
                move(event) {
                    // hide the popup pointer:
                    const elements = document.querySelectorAll(".esri-popup__pointer");
                    elements[0].style.display = "none";

                    // calculate the position and update:
                    position.x += event.dx;
                    position.y += event.dy;

                    event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
                }
            }
        });
    }

    private getView(): Promise<View> {
        const mapWidgetModel = this._mapWidgetModel;
        return new Promise((resolve) => {
            if (mapWidgetModel.view) {
                resolve(mapWidgetModel.view);
            } else {
                const watcher = mapWidgetModel.watch("view", ({value: view}) => {
                    watcher.remove();
                    resolve(view);
                });
            }
        });
    }
}
