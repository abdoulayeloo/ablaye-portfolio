// @/data/index.ts

export interface ChoixItem {
    value: string;
    title: string;
}

export const choix: ChoixItem[] = [
    { value: 'service1', title: 'Service 1' },
    { value: 'service2', title: 'Service 2' },
    // ... autres services
];

export interface ContactInfo {
    title: string;
    description: string;
}

export const contact: ContactInfo = {
    title: 'Contactez-nous',
    description: 'Veuillez remplir le formulaire ci-dessous pour nous contacter.',
};
