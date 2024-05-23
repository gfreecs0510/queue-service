# Description

A lambda based simple queuing mechanism, written in node.
aws resources managed and deployed via serverless

# Endpoints

see swagger.yaml

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
