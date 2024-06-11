# Description

A lambda based simple queuing mechanism, written in node.
aws resources managed and deployed via serverless

# Workflow
see chart
https://lucid.app/lucidchart/b8179612-7fad-4e51-9400-d1dd5e09ad5b/edit?beaconFlowId=7022F14884F09878&invitationId=inv_26589ed7-6ce0-4791-bbb2-c45a8798a69c&page=0_0#

# Endpoints

see openapi.yaml

# Types

any schema updates to openapi.yaml, types must be updated as well
run `npx openapi-typescript ./openapi.yml -o ./types/openapi.ts`

# AWS Resources use

see infra.yml

# Deployment

run serverless deploy

please follow serverless guides for more info

# Dynamodb GSI terms

index name
GSI_{type}_{type}_{number}

types: 
 CMP = composite
 T = terms
 DT = date

GSI_PK_CMP_{number} = composite
GSI_PK_T_{number} = always the terms
GSI_PK_DT_{number} = always created_at

GSI_SK_CMP_{number} = composite
GSI_SK_T_{number} = always the terms
GSI_SK_DT_{number} = always created_at
