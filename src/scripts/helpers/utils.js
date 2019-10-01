class MainSectionState{
    constructor(options = {currentSection: "dashboard"}){
        this.state = {};
        const {currentSection} = options;
        this.state.currentSection = currentSection;
        this._subscribers = [];
        this._notify();

    }
    subscribe(subscriber){
        this._subscribers.push(subscriber);
    }
    _notify(){
        this._subscribers.forEach((subscriber) => {
            try {
                subscriber();
            } catch (error) {
                console.error(error);
            }
        });

    }
    set currentSection(currentSection){
        this.state.currentSection = currentSection;
        this._notify()
    }
    get currentSection(){
        return this.state.currentSection;
    }


}
export{ MainSectionState};