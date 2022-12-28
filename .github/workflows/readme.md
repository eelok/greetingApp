## configure-aws-credentials

1. Create an IAM role that has access to your AWS account.
2. Add permissions e.g. `AdministratorAccess` to the role.
3. In the Trust
2. Create a policy and attach it to the role. The policy should allow the `sts:AssumeRoleWithWebIdentity` action.
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