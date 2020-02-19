import AppsterController from '../appster/AppsterController.js'
import {AppsterGUIId} from '../appster/AppsterConstants.js'


export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    processEditText() {
        this.model.updateText();
    }

    processEnterCreateNewWork = (event) => {
        console.log("processEnterCreateNewWork");

        let nameTextField = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD);
        let workName = nameTextField.value;

        // check for the name requirements
        if (this.model.processNewWorkName(workName) == true) {
            // Add to the list
            this.model.prependWork(this.model.createNewWork(workName));
            this.model.modalDisappears();
        }
    }
}