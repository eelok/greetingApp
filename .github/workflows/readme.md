## configure-aws-credentials

1. Create an IAM role that has access to your AWS account.
2. Add permissions e.g. `AdministratorAccess` to the role.
3. In the Trust
4. Create a policy and attach it to the role. The policy should allow the `sts:AssumeRoleWithWebIdentity` action.
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::<accountid>:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:<user_name>/<repo>:*"
                },
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```
5. Add identity provider for github actions to the role. The identity provider should be `https://token.actions.githubusercontent.com`. Audience should be `sts.amazonaws.com`. (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html#manage-oidc-provider-console)