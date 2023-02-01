import { Autocompleter } from '@usig-gcba/autocompleter';

export interface Suggestion {
    category: string;
    data: Data;
    subTitle: string;
    suggesterName: string;
    title: string;
    type: string;
}



export interface Data {
    altura: number;
    calle: string[];
    calleCruce: null;
    coordenadas: {
        lat?: number;
        lng?: number;
        x?: number;
        y?: number;
    };
    descripcion: string;
    nombre: string;
    smp: string;
    tipo: string;
    tipoDireccion: number;
}


export const useAmbaAutocompleter = (params: { onSuggestions: (value: Suggestion[]) => void, onCompleteSuggestions: () => void, onError: (error: unknown) => void }) => {

    const { onCompleteSuggestions, onError, onSuggestions } = params


    const autocompleter = new Autocompleter(
        {
            onSuggestions: onSuggestions,
            onCompleteSuggestions: onCompleteSuggestions,
            onError: onError,
        },
        {
            //inputPause: 250,
            maxRetries: 1,
            minTextLength: 3,
            maxSuggestions: 10,
        }
    );
    autocompleter.addSuggester('Direcciones', { inputPause: 250 });
    autocompleter.addSuggester('DireccionesAMBA', { inputPause: 250 });
    autocompleter.addSuggester('Lugares', { inputPause: 250 });


    return { ambaAutocompleter: autocompleter };


}
