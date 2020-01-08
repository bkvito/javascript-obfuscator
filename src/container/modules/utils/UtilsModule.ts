import { ContainerModule, interfaces } from 'inversify';
import { ServiceIdentifiers } from '../../ServiceIdentifiers';

import { IArrayUtils } from '../../../interfaces/utils/IArrayUtils';
import { ICryptUtils } from '../../../interfaces/utils/ICryptUtils';
import { IEscapeSequenceEncoder } from '../../../interfaces/utils/IEscapeSequenceEncoder';
import { ILevelledTopologicalSorter } from '../../../interfaces/utils/ILevelledTopologicalSorter';
import { INodeTransformerNamesGroupsBuilder } from '../../../interfaces/utils/INodeTransformerNamesGroupsBuilder';
import { IRandomGenerator } from '../../../interfaces/utils/IRandomGenerator';
import { ITemplateFormatter } from '../../../interfaces/utils/ITemplateFormatter';

import { ArrayUtils } from '../../../utils/ArrayUtils';
import { CryptUtils } from '../../../utils/CryptUtils';
import { EscapeSequenceEncoder } from '../../../utils/EscapeSequenceEncoder';
import { LevelledTopologicalSorter } from '../../../utils/LevelledTopologicalSorter';
import { NodeTransformerNamesGroupsBuilder } from '../../../utils/NodeTransformerNamesGroupsBuilder';
import { RandomGenerator } from '../../../utils/RandomGenerator';
import { TemplateFormatter } from '../../../utils/TemplateFormatter';

export const utilsModule: interfaces.ContainerModule = new ContainerModule((bind: interfaces.Bind) => {
    // array utils
    bind<IArrayUtils>(ServiceIdentifiers.IArrayUtils)
        .to(ArrayUtils)
        .inSingletonScope();

    // random generator
    bind<IRandomGenerator>(ServiceIdentifiers.IRandomGenerator)
        .to(RandomGenerator)
        .inSingletonScope();

    // crypt utils
    bind<ICryptUtils>(ServiceIdentifiers.ICryptUtils)
        .to(CryptUtils)
        .inSingletonScope();

    // escape sequence encoder
    bind<IEscapeSequenceEncoder>(ServiceIdentifiers.IEscapeSequenceEncoder)
        .to(EscapeSequenceEncoder)
        .inSingletonScope();

    // levelled topological sorter
    bind<ILevelledTopologicalSorter>(ServiceIdentifiers.ILevelledTopologicalSorter)
        .to(LevelledTopologicalSorter);

    // node transformer names groups builder
    bind<INodeTransformerNamesGroupsBuilder>(ServiceIdentifiers.INodeTransformerNamesGroupsBuilder)
        .to(NodeTransformerNamesGroupsBuilder)
        .inSingletonScope();

    // template formatter
    bind<ITemplateFormatter>(ServiceIdentifiers.ITemplateFormatter)
        .to(TemplateFormatter)
        .inSingletonScope();
});
