export class NavigationItem {
    public currentImage?: string;
    constructor(public title?: string, public routerLink?: string, public href?: string, public image?: string, public imageHover?: string) {
        this.currentImage = image;
    }
}