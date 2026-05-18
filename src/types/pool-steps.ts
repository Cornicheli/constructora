export interface StepSpec {
    k: string;
    v: string;
}

export interface StepData {
    id: string;
    title: string;
    image: string;
    sub: string;
    desc: string;
    specs: StepSpec[];
    carouselImages: string[];
}
