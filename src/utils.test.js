import {mysorter} from './utils'

const items = [{name:'John'},{name:'Amber'},{name:'Leslie'}, {name:'Ben'}];

it('sort names it by custom', () => {

     expect(items.sort(mysorter)).toEqual([{name:'Leslie'}, {name:'Ben'},{name:'Amber'},{name:'John'}])

})