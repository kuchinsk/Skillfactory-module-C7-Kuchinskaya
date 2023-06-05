import {reverse} from "./index";
describe('test reverse', () =>

    it ('reverse "0123456789"', () => {
        const result = reverse('0123456789')
        expect(result).toBe('9876543210');
    }),

    it ('reverse "JavaScript"', () => {
        const result = reverse('JavaScript')
        expect(result).toBe('tpircSavaJ');
    })
);