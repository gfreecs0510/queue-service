import { generateId } from "../../common/id-generator"
import { createSchema } from "electrodb"

export const Job = createSchema({
    model: {
        service: 'queue',
        entity: 'job',
        version: '1'
    },
    attributes: {
        job_id: {
            type: 'string',
            default: () => generateId('JB'),
        },
        user_id: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        csv_filename: {
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
        created_by: {
            type: 'number'
        },
        updated_by: {
            type: 'number'
        },
        total_task: {
            type: 'number'
        },
        total_task_in_queue: {
            type: 'number'
        },
        total_successful_task: {
            type: 'number'
        },        
        total_failed_task: {
            type: 'number'
        },
        terms: {
            type: 'string'
        }
    },
    indexes: {
        byJobId: {
            pk: {
                field: 'pk',
                composite: ['job_id']
            },
            sk: {
                field: 'sk',
                composite: ['terms']
            }
        },
        byUserId: {
            index: 'GSI_CMP_DT_1',
            pk: {
                field: 'GSI_PK_CMP_1',
                composite: ['user_id']
            },
            sk: {
                field: 'GSI_SK_DT_1',
                composite: ['created_at']
            }
        },
        byLatest: {
            index: 'GSI_T_DT_1',
            pk: {
                field: 'GSI_PK_T_1',
                composite: ['terms']
            },
            sk: {
                field: 'GSI_SK_DT_1',
                composite: ['created_at']
            }
        }
    },
})