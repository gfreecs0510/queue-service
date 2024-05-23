import { generateId } from "../../common/id-generator"
import { createSchema } from "electrodb"

export const Task = createSchema({
    model: {
        service: 'queue',
        entity: 'task',
        version: '1'
    },
    attributes: {
        task_id: {
            type: 'string',
            default: () => generateId('T')
        },
        record_id: {
            type: 'string',
        },
        body: {
            type: 'string'
        },
        status: {
            type: 'string'
        },
        created_at: {
            type: "number",
            readOnly: true,
            required: true,
            default: () => Date.now(),
            set: () => Date.now(),
        },
        updated_at: {
            type: "number",
            watch: "*",
            required: true,
            default: () => Date.now(),
            set: () => Date.now(),
        },
        terms: {
            type: 'string'
        }
    },
    indexes: {
        byJobIdAndTaskId: {
            index: 'GSI_CMP_CMP_1',
            pk: {
                field: 'GSI_1_PK',
                composite: ['job_id']
            },
            sk: {
                field : 'GSI_1_SK',
                composite: ['task_id']
            }
        },
        byJobId : {
            index: 'GSI_CMP_T_1',
            pk: {
                field: 'GSI_1_PK',
                composite: ['job_id']
            },
            sk: {
                field: 'GSI_2_SK',
                composite: ['terms']
            }
        }
    }
})