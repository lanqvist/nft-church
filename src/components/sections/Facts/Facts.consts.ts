import factObjectImg1 from './assets/factObject1.jpeg';
import { FactObject } from './models/facts';
import { createFactObjectFactoryBuilder } from './utils/builder';

export const FACT_OBJECTS: FactObject[] = createFactObjectFactoryBuilder((builder) => {
    builder
        .createFactObjectFactory(factObjectImg1, 'Иконы')
        .addFact(
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis odio voluptatum illo nostrum. Rem culpa tenetur reiciendis excepturi? Odio modi ut ipsa a quo quis debitis officiis reprehenderit illum minus!',
            { top: '20%', left: '33%' }
        )
        .addFact(
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis aliquid culpa temporibus eum voluptates in laborum quaerat, et, illum sint illo eveniet nobis inventore sunt consequatur rem reiciendis officiis veritatis.',
            { top: '50%', left: '20%' }
        );

    builder
        .createFactObjectFactory(factObjectImg1, 'Иконы 2')
        .addFact('Veniam consectetur et duis nisi exercitation elit irure ipsum cillum ipsum mollit.', {
            top: '10%',
            left: '30%',
        })
        .addFact('Aute minim fugiat occaecat ex est elit laboris.', { top: '10%', left: '60%' })
        .addFact('Ea occaecat ad sunt consectetur fugiat adipisicing consectetur esse enim dolore.', {
            top: '56%',
            left: '30%',
        });

    builder
        .createFactObjectFactory(factObjectImg1, 'Иконы 3')
        .addFact('Aute occaecat fugiat labore enim minim enim magna enim commodo.', { top: '30%', left: '60%' })
        .addFact(
            'Irure proident pariatur ut culpa deserunt veniam ullamco quis. Sunt irure et aliquip consequat enim aute. Non adipisicing mollit esse veniam nulla eu enim. Et exercitation cillum elit ipsum. Magna adipisicing qui ut qui Lorem veniam ea ut voluptate sint ullamco id qui. Aute ullamco consequat ex officia ipsum esse cillum eiusmod pariatur nisi occaecat ullamco voluptate. Fugiat qui quis exercitation in dolor culpa eu irure fugiat cupidatat laborum.',
            { top: '80%', left: '60%' }
        )
        .addFact(
            'Irure magna eiusmod dolor labore tempor fugiat nisi eu incididunt quis. Sunt veniam do in eu veniam dolore cillum id. Nulla minim reprehenderit dolore incididunt eu velit ipsum deserunt occaecat esse nisi esse. Incididunt excepteur minim consequat cillum occaecat minim velit. Ipsum commodo non incididunt ullamco nulla proident sit veniam culpa. Do do officia deserunt amet culpa non consectetur elit dolor labore mollit ipsum ut qui. Commodo cupidatat Lorem laborum id aliqua.',
            { top: '56%', left: '35%' }
        );
}).toArray();
