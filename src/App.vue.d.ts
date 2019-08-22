declare const _default: {
    name: string;
    components: {};
    data(): {
        obj: {};
        first: string;
        second: string;
    };
    directives: {
        focus: {
            inserted(el: HTMLElement): void;
        };
    };
    methods: {
        ship(): void;
        focus(ev: Event): void;
    };
};
export default _default;
