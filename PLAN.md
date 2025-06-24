this is a sample file for gathering thoughts
┌────────────┐         ┌────────────┐        ┌────────────┐
│   Author   │         │   Posts    │        │  Comments  │
├────────────┤         ├────────────┤        ├────────────┤
│ id         │◄────┐   │ id         │◄──┐    │ id         │
│ name       │     └──▶│ author_id  │   └────│ user_id    │
│ email      │         │ title      │        │ post_id    │
│ password   │         │ content    │        │ content    │
│ role       │         │ created_at │        │ created_at │
│ created_at │         └────────────┘        └────────────┘

                      ▲
                      │
                      │
                ┌────────────┐
                │   Tags     │
                ├────────────┤
                │ id         │
                │ name       │
                └────────────┘
                      ▲
                      │
                ┌────────────┐
                │ PostTags   │ (junction table)
                ├────────────┤
                │ post_id    │◄──┐
                │ tag_id     │◄──┘
                └────────────┘
