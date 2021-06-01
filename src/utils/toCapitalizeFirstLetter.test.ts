import {toCapitalizeFirstLetter} from "./toCapitalizeFirstLetter";

describe(
    'toCapitalizeFirstLetter', () => {
        test(`Должна принимать 'some String' и возвращать 'Some string'`, () => {
            const testString = toCapitalizeFirstLetter('some String');
            expect(testString).toEqual('Some string');
        })
    }
);