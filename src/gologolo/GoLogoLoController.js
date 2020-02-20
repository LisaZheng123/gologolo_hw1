import AppsterController from '../appster/AppsterController.js'
import {AppsterCallback, AppsterGUIId, AppsterHTML} from '../appster/AppsterConstants.js'
import {GoLogoLoGUIId, GoLogoLoCallback, GoLogoLoModel} from './GoLogoLoConstants.js'

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    registerAppsterEventHandlers() {
        // FIRST THE NEW WORK BUTTON ON THE HOME SCREEN
        this.registerEventHandler(AppsterGUIId.APPSTER_HOME_NEW_WORK_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CREATE_NEW_WORK]);

        // Creation of new logo modal buttons
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CANCEL_CREATE_NEW_WORK]);
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_ENTER_CREATE_NEW_WORK]);

        // THEN THE CONTROLS ON THE EDIT SCREEN
        this.registerEventHandler(AppsterGUIId.APPSTER_EDIT_HOME_LINK, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_GO_HOME]);
        this.registerEventHandler(AppsterGUIId.APPSTER_EDIT_TRASH, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_DELETE_WORK]);

        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_FONT_SLIDER]);

        // AND THE MODAL BUTTONS
        this.registerEventHandler(AppsterGUIId.APPSTER_YES_NO_MODAL_YES_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CONFIRM_DELETE_WORK]);
        this.registerEventHandler(AppsterGUIId.APPSTER_YES_NO_MODAL_NO_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CANCEL_DELETE_WORK]);
    
        // EDIT ITEM BUTTON
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_WORK]);
        
        // EDIT ITEM MODAL BUTTONS
        this.registerEventHandler(GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_ENTER_EDIT_ITEM]);
        this.registerEventHandler(GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CANCEL_EDIT_ITEM]);
        
    }

    processEditText = () => {
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

    processCancelEditItem = () => {
        this.model.cancelEditItem();
    }

    processEnterEditItem = () => {
        console.log("processEnterEditItem");

        let nameTextField = document.getElementById(GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD);
        let workName = nameTextField.value;
        this.model.enterEditItemText(workName);
    }

    processEditScreenFontSlider = () => {
        console.log(this.model.workToEdit.name);
        console.log(this.model.workToEdit.fontSize);

        let work = this.getRecentWork(this.currentWork);
        let font = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        console.log(work.getFontSize());
        this.model.editScreenFontSlider(font.value);
    }
}