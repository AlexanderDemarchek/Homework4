import axios from "axios";
import Component, {ComponentProps, getComponents, getComponent} from '../../app/js/component';
import Input from "../input/input";
import FormButton from "../form-button/form-button";

export default class Form extends Component.Default {
    nInputs: Input[];
    nFormButton: FormButton;
    statesReqInputs: [boolean,boolean,boolean,boolean] = [false,false,false,false];


    constructor(element: ComponentProps) {
        super(element);

        this.nInputs = getComponents('input',this.nRoot).map(component=> new Input(component));
        this.nFormButton = new FormButton(getComponent('form-button',this.nRoot));
        this.nRoot.addEventListener('submit',this.onSubmit);
        this.nRoot.addEventListener('input', this.controlSubmit)

    }

    controlSubmit = (e:Event) => {
        let target = e.target;

        if(target instanceof HTMLInputElement)
        {
            let currentInput = target;
            let inpName = currentInput.getAttribute("name");
            let nInput = this.nInputs.find(inp => inp.name == inpName);

            switch(inpName)
            {
                case 'name':
                    if(nInput.getValue().length > 0 && nInput.value.length < 20)
                        this.statesReqInputs[0] = true;
                    else
                        this.statesReqInputs[0] = false;
                    break;

                case 'surname':
                    if(nInput.getValue().length > 0 && nInput.value.length < 20)
                        this.statesReqInputs[1] = true;
                    else
                        this.statesReqInputs[1] = false;
                    break;

                case 'phone':
                    if(nInput.getValue().match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/))
                        this.statesReqInputs[2] = true;
                    else
                        this.statesReqInputs[2] = false;
                    break;

                case 'email':
                    if(nInput.getValue().match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/))
                        this.statesReqInputs[3] = true;
                    else
                        this.statesReqInputs[3] = false;
                    break;
            }

        }

        if(this.statesReqInputs.reduce((init,cur)=>init && cur, true)){
            this.nFormButton.resolveSubmit(true);
        }
        else {
            this.nFormButton.resolveSubmit(false);
        }

    }

    onSubmit = (e:Event) => {
        e.preventDefault();

        let data: {
            [index: string]: string;
        } = {};


        this.nInputs.forEach(item=> {
            data[item.name]= item.getValue();
        });

        alert(JSON.stringify(data));
        axios.get("/", data);
    }

    destroy = () => {
        // Destroy functions
    }
}