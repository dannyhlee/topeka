import { LightningElement, api } from 'lwc';

export default class AttractionIterator extends LightningElement {
    @api name;
    @api description;
    @api picture;
    active = false;

    get activeTab() {
        return this.active;
    }
    @api set activeTab(activeValue) {
        if (activeValue === this.name) {
            this.active = true;
        } else {
            this.active = false;
        }
    }
}
