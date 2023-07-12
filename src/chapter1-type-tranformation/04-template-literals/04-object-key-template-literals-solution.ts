import {Equal, Expect} from "../../helper";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = Record<TemplateLiteralKey, string>;

type tests = [
    Expect<
        Equal<
            ObjectOfKeys,
            {
                userId: string;
                userName: string;
                postId: string;
                postName: string;
                commentId: string;
                commentName: string;
            }
        >
    >,
];
