import { createSchema } from "electrodb"

export const User = createSchema({
    model: {
        service: 'queue',
        entity: 'user',
        version: '1'
    },
    attributes: {
        user_id: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        last_activity: {
            type: "number",
            watch: "*",
            required: true,
            default: () => Date.now(),
            set: () => Date.now(),
        },
        role: {
            type: 'string'
        },
        role_id: {
            type: 'number'
        },
        terms: {
            type: 'string'
        }
    },
    indexes: {
        byUserId: {
            pk: {
                field: 'pk',
                composite: ['user_id']
            },
            sk: {
                field: 'sk',
                composite: ['email']
            }
        },
        byUserEmail: {
            index: 'GSI_CMP_T_1',
            pk: {
                field: 'GSI_PK_CMP_1',
                composite: ['email']
            },
            sk: {
                field: 'GSI_SK_T_1',
                composite: ['terms']
            }
        }
    }
})