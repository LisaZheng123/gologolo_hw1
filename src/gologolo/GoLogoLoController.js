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
        // Illegal Logo Name
        this.registerEventHandler(AppsterGUIId.APPSTER_CONFIRM_MODAL_OK_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_ILLEGAL_NAME]);

        // THEN THE CONTROLS ON THE EDIT SCREEN
        this.registerEventHandler(AppsterGUIId.APPSTER_EDIT_HOME_LINK, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_GO_HOME]);
        this.registerEventHandler(AppsterGUIId.APPSTER_EDIT_TRASH, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_DELETE_WORK]);

        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_FONT_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_TEXT_COLOR_PICKER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_BACKGROUND_COLOR_PICKER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_BORDER_COLOR_PICKER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_BORDER_RADIUS_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_BORDER_THICKNESS_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_PADDING_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_SCREEN_MARGIN_SLIDER]);

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

    processIllegalName = () => {
        console.log("processIllegalName");
        this.model.illegalName();
    }

    processCancelEditItem = () => {
        this.model.cancelEditItem();
    }

    processEnterEditItem = () => {
        console.log("processEnterEditItem");

        let nameTextField = document.getElementById(GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD);
        let workName = nameTextField.value;
        this.model.currentWork.setText(workName);
        this.model.enterEditItemText(workName);
    }

    processEditScreenFontSlider = () => {
        console.log("processEditScreenFontSlider");

        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        let fontSize = fontSizeSlider.value;
        this.model.currentWork.setFontSize(fontSize);
        this.model.enterEditItemFontSize(fontSize);
    }

    processEditScreenTextColorPicker = () => {
        let TextColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        let textColor = TextColorPicker.value;

        this.model.currentWork.setTextColor(textColor);
        this.model.enterEditItemTextColorPicker(textColor);
    }

    processEditScreenBackgroundColorPicker = () => {
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        let backgroundColor = backgroundColorPicker.value;

        this.model.currentWork.setBackgroundColor(backgroundColor);
        this.model.enterEditItemTextBackgroundColorPicker(backgroundColor);
    }

    processEditScreenBorderColorPicker = () => {
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        let borderColor = borderColorPicker.value;

        this.model.currentWork.setBorderColor(borderColor);
        this.model.enterEditItemTextBorderColorPicker(borderColor);
    }
    
    processEditScreenBorderRadiusSlider = () => {
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        let borderRadius = borderRadiusSlider.value;

        this.model.currentWork.setBorderRadius(borderRadius);
        this.model.enterEditItemTextBorderRadius(borderRadius);
    }
    
    processEditScreenBorderThicknessSlider = () => {
        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        let borderThickness = borderThicknessSlider.value;

        this.model.currentWork.setBorderThickness(borderThickness);
        this.model.enterEditItemTextBorderThickness(borderThickness);
    }
    
    processEditScreenPaddingSlider = () => {
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        let padding = paddingSlider.value;

        this.model.currentWork.setPadding(padding);
        this.model.enterEditItemTextPadding(padding);

    }
    
    processEditScreenMarginSlider = () => {
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        let margin = marginSlider.value;

        this.model.currentWork.setMargin(margin);
        this.model.enterEditItemTextMargin(margin);
    }
}