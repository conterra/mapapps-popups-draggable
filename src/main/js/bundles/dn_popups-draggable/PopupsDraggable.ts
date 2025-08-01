///
/// Copyright (C) 2025 con terra GmbH (info@conterra.de)
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
import async from "apprt-core/async";

export class PopupsDraggable {

    private popupTargetSelectionString = ".esri-component.esri-popup";
    private interactable: any = null;

    async activate(): Promise<void> {
        const view = await this.getView();

        view.popup.watch("features", (features: any) => {
            if (features.length === 0) {
                // popup closed - reset the transform css so that it doesn't move next time the popup opens
                async(() => {
                    const elements = document.querySelectorAll(this.popupTargetSelectionString);
                    if (elements && elements.length > 0) {
                        elements[0].style.transform = `translate(0px, 0px)`;
                        console.info(elements);
                    }
                }, 100);

            } else {
                this.setupInteractJs();
            }
        });
    }

    setupInteractJs(): void {
        // Remove previous interactable if it exists
        if (this.interactable) {
            this.interactable.unset();
            this.interactable = null;
        }

        // setup the new listener:
        const position = {x: 0, y: 0};
        this.interactable = interact(this.popupTargetSelectionString).draggable({
            allowFrom: '.header-container',
            listeners: {
                move(event) {
                    // hide the popup pointer:
                    const elements = document.querySelectorAll(".esri-popup__pointer");
                    if (elements && elements.length > 0 && (elements[0] as HTMLElement).style) {
                        (elements[0] as HTMLElement).style.display = "none";
                    }

                    // calculate the position and update:
                    position.x += event.dx;
                    position.y += event.dy;

                    (event.target as HTMLElement).style.transform = `translate(${position.x}px, ${position.y}px)`;
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
