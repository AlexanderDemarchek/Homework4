import Component, { ComponentProps } from '../../app/js/component';

export default class TwoColComponent extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);

        const leftCol = this.getElement("wraper-col--bgGreen");
        const rightCol = this.getElement("wraper-col--bgRed");

        const button = this.getElement("buttonWraper").firstChild;

        button.addEventListener("click",() => this.OnClickButton(leftCol,rightCol));

    }

    OnClickButton = (col1: HTMLElement, col2: HTMLElement) =>
    {
        col1.classList.toggle("twoColComponent__wraper-col--bgGreen");
        col2.classList.toggle("twoColComponent__wraper-col--bgRed");
    }

    destroy = () => {
        // Destroy functions
    }

}