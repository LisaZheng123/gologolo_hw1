import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'

export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }

    createNewWork(workName) {
        let newRandomText = new GoLogoLoLogo(workName);
        return newRandomText;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    makeColor(colorData) {
        return "rgb(" + colorData.red + ", " + colorData.green + ", " + colorData.blue + ")";
    }

    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
            }
        }

        return appWork;
    }

    updateText = () => {
       this.view.editTextModalAppears();
    }

    cancelEditItem = () => {
        console.log("Cancel Edit Item");
        this.view.editTextModalDisappears();
    }

    enterEditItemText = (workName) => {
        this.view.EditItemText(workName);
        this.view.editTextModalDisappears();
    }

    enterEditItemFontSize = (font) => {
         this.view.enterEditItemFontSize(font);
    }

    enterEditItemTextColorPicker = (color) => {
        this.view.enterEditItemTextColorPicker(color);
    }

    enterEditItemTextBackgroundColorPicker = (backgroundColor) => {
        this.view.enterEditItemTextBackgroundColorPicker(backgroundColor);
    }

    enterEditItemTextBorderColorPicker = (borderColor) => {
        this.view.enterEditItemTextBorderColorPicker(borderColor);
    }

    enterEditItemTextBorderRadius = (borderRadius) => {
        this.view.enterEditItemTextBorderRadius(borderRadius);
    }

    enterEditItemTextBorderThickness = (borderThickness) => {
        this.view.enterEditItemTextBorderThickness(borderThickness);
    }

    enterEditItemTextPadding = (padding) => {
        this.view.enterEditItemTextPadding(padding);
    }

    enterEditItemTextMargin = (margin) => {
        this.view.enterEditItemTextMargin(margin);
    }
}