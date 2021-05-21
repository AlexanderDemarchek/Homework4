import Component, { ComponentProps } from '../../app/js/component';


export default class FormButton extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);
    }
    resolveSubmit = (disabled: boolean) => {
        const disabledClass = `${this.nRootName}--disabled`;
        if (disabled) {
            this.nRoot.classList.remove(disabledClass);
        } else {
            this.nRoot.classList.add(disabledClass);
        }

        if (disabled) {
            this.nRoot.removeAttribute('disabled');
        } else {
            this.nRoot.setAttribute('disabled','disabled')
        }

    }

    destroy = () => {
        // Destroy functions
    }
}