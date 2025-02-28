import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText, GoLogoLoModel} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterSymbols, AppsterGUIId, AppsterGUIClass, AppsterText} from '../appster/AppsterConstants.js'
import AppsterView from '../appster/AppsterView.js'

export default class GoLogoLoView extends AppsterView {
    constructor() {
        super();
    }

    buildGoLogoLoTextInputModal() {
        let textModal = this.buildElement(  AppsterHTML.DIV, 
                                            GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL,
                                            [AppsterGUIClass.APPSTER_MODAL],
                                            [],
                                            null,
                                            AppsterGUIClass.MODAL_ANIMATION_LEFT);
        let textFrame = this.buildElement( AppsterHTML.DIV, 
                                            GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_FRAME,
                                            [AppsterGUIClass.APPSTER_MODAL_FRAME]);
        let header = this.buildElement(     AppsterHTML.HEADER, 
                                            GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_HEADER,
                                            [AppsterGUIClass.APPSTER_MODAL_HEADER]);
        let section = this.buildElement(    AppsterHTML.SECTION, 
                                            GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_SECTION,
                                            [AppsterGUIClass.APPSTER_MODAL_SECTION]);
        let p = this.buildElement(AppsterHTML.P);
        let strong = this.buildElement(     AppsterHTML.STRONG, 
                                                "",
                                                [],
                                                [],
                                                AppsterText.APPSTER_TEXT_INPUT_MODAL_PROMPT_TEXT);
        let textFieldAttributes = [];
        textFieldAttributes[AppsterHTML.TYPE] = AppsterHTML.TEXT;
        let textField = this.buildElement(  AppsterHTML.INPUT,
                                            GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD,
                                            [AppsterGUIClass.APPSTER_MODAL_TEXTFIELD],
                                            textFieldAttributes);
        let enterButton = this.buildElement(   AppsterHTML.BUTTON, 
                                            GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            AppsterText.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT);
        let cancelButton = this.buildElement(AppsterHTML.BUTTON, 
                                            GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            AppsterText.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT);
        let footer = this.buildElement(     AppsterHTML.FOOTER, 
                                            "", 
                                            [AppsterGUIClass.APPSTER_MODAL_FOOTER],
                                            [],
                                            AppsterText.APPSTER_TEXT_INPUT_MODAL_FOOTER_TEXT);
        p.appendChild(strong);
        section.appendChild(p);
        textFrame.appendChild(header);
        textFrame.appendChild(section);
        section.appendChild(textField);
        section.appendChild(enterButton);
        section.appendChild(cancelButton);
        textFrame.appendChild(footer);
        textModal.appendChild(textFrame);
        return textModal;
    }

    fillAppWorkspace(workspace) {
        let colorPickerAttributes = [];
        colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
        let rangeAttributes = [];
        rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

        // FIRST MAKE THE TOOLBAR
        let toolbar = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TOOLBAR);
        let editTextButton = this.buildElement(AppsterHTML.BUTTON, GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, [], [], GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT);
        editTextButton.innerHTML = AppsterSymbols.EDIT;
        let fontSizeSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, [], rangeAttributes);
        let textColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, [], colorPickerAttributes);
        let backgroundColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, [], colorPickerAttributes);
        let borderColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, [], colorPickerAttributes);
        let borderRadiusSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, [], rangeAttributes);
        let borderThicknessSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, [], rangeAttributes);
        let paddingSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, [], rangeAttributes);
        let marginSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, [], rangeAttributes);
        let textDiv = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TEXT);
        let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
        toolbar.appendChild(editTextButton);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT));
        toolbar.appendChild(fontSizeSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT));
        toolbar.appendChild(textColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT));
        toolbar.appendChild(backgroundColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT));
        toolbar.appendChild(borderColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT));
        toolbar.appendChild(borderRadiusSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT));
        toolbar.appendChild(borderThicknessSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_PADDING_TEXT));
        toolbar.appendChild(paddingSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_MARGIN_TEXT));
        toolbar.appendChild(marginSlider);

        workspace.appendChild(toolbar);
        workspace.appendChild(textDiv);
        return workspace;
    }

    loadWork(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = work.getText();
        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        fontSizeSlider.value = work.getFontSize();
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        textColorPicker.value = work.getTextColor();
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        backgroundColorPicker.value = work.getBackgroundColor();
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        borderColorPicker.value = work.getBorderColor();
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderRadiusSlider.value = work.getBorderRadius();

        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        borderThicknessSlider.value = work.getBorderThickness();
        
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        paddingSlider.value = work.getPadding();
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        marginSlider.value = work.getMargin();
        this.loadWorkStyle(work);
    }

    loadWorkStyle(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.style.colorInterpolation = work.getTextColor();
        textDiv.style.backgroundColor = work.getBackgroundColor();
        textDiv.style.borderColor = work.getBorderColor();
        // appended
        textDiv.style.borderRadius = work.getBorderRadius() + "px";
        textDiv.style.borderThickness = work.getBorderThickness() + "px";
        textDiv.style.borderStyle = "solid";
        textDiv.style.fontSize = work.getFontSize() + "px";
        textDiv.style.padding = work.getPadding() + "px";
        textDiv.style.margin = work.getMargin() + "px";
        textDiv.style.borderWidth = work.getBorderThickness() + "px";
    }

    addListItem(initText) {
        let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
        let listItemCount = textList.childNodes.length;
        let newListItem = this.buildElement(AppsterHTML.LI, RTA_GUIId.RTA_TEXT_LIST_ITEM 
            + listItemCount);
        newListItem.innerHTML = initText;
        textList.appendChild(newListItem);
    }

    loadChildLogo() {
        let appsterRootDiv = document.getElementById(AppsterGUIId.APPSTER_ROOT_DIV);
        let GoLogoLoTextInputModal = this.buildGoLogoLoTextInputModal();
        appsterRootDiv.appendChild(GoLogoLoTextInputModal);
    }

    appendLetter(listItemId, letterToAppend) {
        let textList = document.getElementById(listItemId);
        textList.innerHTML += textList.innerHTML + letterToAppend;
    }

    editTextModalAppears = () => {
        console.log("editTextModalAppears");
        let dialog = document.getElementById(GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL); 
        dialog.classList.add(AppsterGUIClass.IS_VISIBLE);

        // let textbox = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD);
        let logo = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).innerHTML;
        document.getElementById(GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value = logo;
        // textbox.value = logo;
    }

    editTextModalDisappears(){
        console.log("editTextModalDissapears");
        let dialog = document.getElementById(GoLogoLoModel.GOLOGOLO_TEXT_INPUT_MODAL); 
        dialog.classList.remove(AppsterGUIClass.IS_VISIBLE);
    }

    EditItemText = (workName) => {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = workName;
    }

    enterEditItemFontSize = (font) => {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.fontSize = font + "px";
    }

    enterEditItemTextColorPicker = (color) => {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.color = color;
    }

    enterEditItemTextBackgroundColorPicker = (backgroundColor) => {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.backgroundColor = backgroundColor;
    }

    enterEditItemTextBorderColorPicker = (borderColor) => {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.borderColor = borderColor;
    }

    enterEditItemTextBorderRadius = (borderRadius) => {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.borderRadius = borderRadius + "px";
    }

    enterEditItemTextBorderThickness = (borderThickness) => {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.borderWidth = borderThickness + "px";
    }

    enterEditItemTextPadding = (padding) => {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.padding = padding + "px";
    }

    enterEditItemTextMargin = (margin) => {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.margin = margin + "px";
    }
}