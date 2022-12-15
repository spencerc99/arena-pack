import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

pack.setUserAuthentication({
  type: coda.AuthenticationType.OAuth2,
  authorizationUrl: "https://dev.are.na/oauth/authorize",
  tokenUrl: "https://dev.are.na/oauth/token",
});

const ApiDomain = "api.are.na";
pack.addNetworkDomain(ApiDomain);

const BaseApiUrl = `https://${ApiDomain}/v2`;

const channelContent = coda.makeObjectSchema({
  idProperty: "id",
  displayProperty: "title",
  identity: { name: "ChannelContent" },
  properties: {
    id: { type: coda.ValueType.Number },
    title: { type: coda.ValueType.String },
    updated_at: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.DateTime,
    },
    created_at: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.DateTime,
    },
    state: { type: coda.ValueType.String },
    comment_count: { type: coda.ValueType.Number },
    generated_title: { type: coda.ValueType.String },
    content: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Html,
      fromKey: "content_html",
    },
    description: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Html,
      fromKey: "description_html",
    },
    visibility: { type: coda.ValueType.String },
    source: {
      type: coda.ValueType.Object,
      displayProperty: "url",
      properties: {
        url: { type: coda.ValueType.String, codaType: coda.ValueHintType.Url },
        title: { type: coda.ValueType.String },
        provider: {
          type: coda.ValueType.Object,
          properties: {
            name: { type: coda.ValueType.String },
            url: { type: coda.ValueType.String },
          },
        },
      },
    },
    image: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.ImageReference,
    },
    // image: {
    //   type: coda.ValueType.Object,
    //   displayProperty: "display",
    //   properties: {
    //     filename: { type: coda.ValueType.String },
    //     content_type: { type: coda.ValueType.String },
    //     updated_at: { type: coda.ValueType.String },
    //     thumb: {
    //       type: coda.ValueType.String,
    //       codaType: coda.ValueHintType.ImageReference,
    //     },
    //     square: {
    //       type: coda.ValueType.String,
    //       codaType: coda.ValueHintType.ImageReference,
    //     },
    //     display: {
    //       type: coda.ValueType.String,
    //       codaType: coda.ValueHintType.ImageReference,
    //     },
    //     large: {
    //       type: coda.ValueType.String,
    //       codaType: coda.ValueHintType.ImageReference,
    //     },
    //     original: {
    //       type: coda.ValueType.Object,
    //       properties: {
    //         url: { type: coda.ValueType.String },
    //         file_size: { type: coda.ValueType.Number },
    //         file_size_display: { type: coda.ValueType.String },
    //       },
    //     },
    //   },
    // },
    embed: {
      type: coda.ValueType.Object,
      properties: {
        type: { type: coda.ValueType.String },
        title: { type: coda.ValueType.String },
        author_name: { type: coda.ValueType.String },
        author_url: { type: coda.ValueType.String },
        width: { type: coda.ValueType.Number },
        height: { type: coda.ValueType.Number },
        html: { type: coda.ValueType.String },
      },
    },
    base_class: { type: coda.ValueType.String },
    class: { type: coda.ValueType.String },
    user: {
      type: coda.ValueType.Object,
      properties: {
        id: { type: coda.ValueType.Number },
        created_at: { type: coda.ValueType.String },
        slug: { type: coda.ValueType.String },
        username: { type: coda.ValueType.String },
        first_name: { type: coda.ValueType.String },
        last_name: { type: coda.ValueType.String },
        full_name: { type: coda.ValueType.String },
        avatar: { type: coda.ValueType.String },
        avatar_image: {
          type: coda.ValueType.Object,
          properties: {
            thumb: { type: coda.ValueType.String },
            display: { type: coda.ValueType.String },
          },
        },
        channel_count: { type: coda.ValueType.Number },
        following_count: { type: coda.ValueType.Number },
        profile_id: { type: coda.ValueType.Number },
        follower_count: { type: coda.ValueType.Number },
        initials: { type: coda.ValueType.String },
        can_index: { type: coda.ValueType.Boolean },
        metadata: { type: coda.ValueType.Object, properties: {} },
        is_premium: { type: coda.ValueType.Boolean },
        is_lifetime_premium: { type: coda.ValueType.Boolean },
        is_supporter: { type: coda.ValueType.Boolean },
        is_exceeding_connections_limit: { type: coda.ValueType.Boolean },
        is_confirmed: { type: coda.ValueType.Boolean },
        is_pending_reconfirmation: { type: coda.ValueType.Boolean },
        is_pending_confirmation: { type: coda.ValueType.Boolean },
        badge: { type: coda.ValueType.String },
        base_class: { type: coda.ValueType.String },
        class: { type: coda.ValueType.String },
      },
    },
    position: { type: coda.ValueType.Number },
    selected: { type: coda.ValueType.Boolean },
    connection_id: { type: coda.ValueType.Number },
    connected_at: { type: coda.ValueType.String },
    connected_by_user_id: { type: coda.ValueType.Number },
    connected_by_username: { type: coda.ValueType.String },
    connected_by_user_slug: { type: coda.ValueType.String },
    channel: { type: coda.ValueType.String },
  },
  featuredProperties: [
    "description",
    "image",
    "source",
    "connected_by_username",
    "created_at",
  ],
});

const collaboratorSchema = coda.makeObjectSchema({
  idProperty: "id",
  displayProperty: "slug",
  properties: {
    id: { type: coda.ValueType.Number },
    created_at: { type: coda.ValueType.String },
    slug: { type: coda.ValueType.String },
    username: { type: coda.ValueType.String },
    first_name: { type: coda.ValueType.String },
    last_name: { type: coda.ValueType.String },
    full_name: { type: coda.ValueType.String },
    avatar: { type: coda.ValueType.String },
    avatar_image: {
      type: coda.ValueType.Object,
      properties: {
        thumb: { type: coda.ValueType.String },
        display: { type: coda.ValueType.String },
      },
    },
    channel_count: { type: coda.ValueType.Number },
    following_count: { type: coda.ValueType.Number },
    profile_id: { type: coda.ValueType.Number },
    follower_count: { type: coda.ValueType.Number },
    initials: { type: coda.ValueType.String },
    can_index: { type: coda.ValueType.Boolean },
    is_premium: { type: coda.ValueType.Boolean },
    is_lifetime_premium: { type: coda.ValueType.Boolean },
    is_supporter: { type: coda.ValueType.Boolean },
    is_exceeding_connections_limit: { type: coda.ValueType.Boolean },
    is_confirmed: { type: coda.ValueType.Boolean },
    is_pending_reconfirmation: { type: coda.ValueType.Boolean },
    is_pending_confirmation: { type: coda.ValueType.Boolean },
    badge: { type: coda.ValueType.String },
    base_class: { type: coda.ValueType.String },
    class: { type: coda.ValueType.String },
  },
});

const channel = coda.makeObjectSchema({
  idProperty: "id",
  displayProperty: "title",
  properties: {
    id: { type: coda.ValueType.Number },
    title: { type: coda.ValueType.String },
    updated_at: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.DateTime,
    },
    created_at: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.DateTime,
    },
    added_to_at: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.DateTime,
    },
    published: { type: coda.ValueType.Boolean },
    open: { type: coda.ValueType.Boolean },
    collaboration: { type: coda.ValueType.Boolean },
    collaborator_count: { type: coda.ValueType.Number },
    slug: { type: coda.ValueType.String },
    length: { type: coda.ValueType.Number },
    kind: { type: coda.ValueType.String },
    status: { type: coda.ValueType.String },
    // manifest: {
    //   type: coda.ValueType.Object,
    //   properties: {
    //     key: { type: coda.ValueType.String },
    //     AWSAccessKeyId: { type: coda.ValueType.String },
    //     bucket: { type: coda.ValueType.String },
    //     success_action_status: { type: coda.ValueType.String },
    //     policy: { type: coda.ValueType.String },
    //     acl: { type: coda.ValueType.String },
    //     signature: { type: coda.ValueType.String },
    //     expires: { type: coda.ValueType.String },
    //   },
    // },
    contents: { type: coda.ValueType.Array, items: channelContent },
    base_class: { type: coda.ValueType.String },
    collaborators: { type: coda.ValueType.Array, items: collaboratorSchema },
    follower_count: { type: coda.ValueType.Number },
    share_link: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    class_name: { type: coda.ValueType.String },
    can_index: { type: coda.ValueType.Boolean },
    nsfw: { type: coda.ValueType.Boolean },
    owner: collaboratorSchema,
    user: collaboratorSchema,
  },
});
// Regex to match https://www.are.na/chakra/speculative-emergent-world-building
const ArenaChannelRegex = /[https:\/\/]?[www\.]?are\.na\/[\w-]+\/([\w-]+)/;
const ArenaUserRegex = /[https:\/\/]?[www\.]?are\.na\/[\w-]+/;

function maybeParseChannelIdentifierFromUrl(maybeChannelUrl: string): string {
  if (ArenaChannelRegex.test(maybeChannelUrl)) {
    return maybeChannelUrl.match(ArenaChannelRegex)[1];
  }

  return maybeChannelUrl;
}

function maybeParseUserIdentifierFromUrl(maybeUserUrl: string): string {
  if (ArenaUserRegex.test(maybeUserUrl)) {
    return maybeUserUrl.match(ArenaUserRegex)[1];
  }

  return maybeUserUrl;
}

function parseRawContentsIntoCodaChannelContents(rawChannel: any): object {
  return {
    ...rawChannel,
    image: rawChannel?.image?.display?.url,
  };
}

function parseRawContentsIntoCodaChannel(rawChannel: any): object {
  return {
    ...rawChannel,
    image: rawChannel?.image?.display?.url,
  };
}

async function listChannels([], context: coda.ExecutionContext) {
  const response = await context.fetcher.fetch({
    method: "GET",
    url: `${BaseApiUrl}/channels`,
  });
  const items = response.body;
  return { result: items };
}

function parseChannelIntoCodaChannel(channel): object {
  return { ...channel, description: channel.metadata?.description };
}

function parseUserIntoCodaUser(user): object {
  return { ...user };
}

async function getChannel([channelInput], context: coda.ExecutionContext) {
  const channelId = maybeParseChannelIdentifierFromUrl(channelInput);
  const response = await context.fetcher.fetch({
    method: "GET",
    url: apiUrl(`/channels/${channelId}`),
  });
  const item = response.body;
  return parseChannelIntoCodaChannel(item);
}

async function getUser([userInput], context: coda.ExecutionContext) {
  const userId = maybeParseUserIdentifierFromUrl(userInput);
  const response = await context.fetcher.fetch({
    method: "GET",
    url: apiUrl(`/users/${userId}`),
  });
  const item = response.body;
  return parseUserIntoCodaUser(item);
}

export function apiUrl(path: string, params?: Record<string, any>): string {
  const url = `${BaseApiUrl}${path}`;
  return coda.withQueryParams(url, params || {});
}

function nextUrlFromResponse(
  path: string,
  params: Record<string, any>,
  response: coda.FetchResponse<any>
): string | undefined {
  const { page, length, per, current_page } = response.body;
  let finalPage = page || current_page;
  console.log("page, length, per", finalPage, length, per);
  if (finalPage * per < length) {
    console.log(finalPage + 1);
    return apiUrl(path, { ...params, page: finalPage + 1 });
  }
}

async function getChannelContents(
  [channelInput],
  context: coda.ExecutionContext
) {
  const continuation = context.sync.continuation;
  const channelId = maybeParseChannelIdentifierFromUrl(channelInput);
  const basePath = `/channels/${channelId}`;
  console.log(continuation);
  const url = continuation
    ? (continuation.nextUrl as string)
    : apiUrl(basePath);

  const response = await context.fetcher.fetch({
    method: "GET",
    url,
  });
  const nextUrl = nextUrlFromResponse(basePath, {}, response);
  const channelTitle = response.body.title;

  console.log(nextUrl);

  return {
    result: response.body.contents.map((channel) =>
      parseRawContentsIntoCodaChannelContents({
        ...channel,
        channel: channelTitle,
      })
    ),
    continuation: nextUrl ? { nextUrl } : undefined,
  };
}

async function listUserChannels([userInput], context: coda.ExecutionContext) {
  const continuation = context.sync.continuation;
  const userId = maybeParseUserIdentifierFromUrl(userInput);
  const basePath = `/users/${userId}/channels`;
  console.log(continuation);
  const url = continuation
    ? (continuation.nextUrl as string)
    : apiUrl(basePath);

  const response = await context.fetcher.fetch({
    method: "GET",
    url,
  });
  const nextUrl = nextUrlFromResponse(basePath, {}, response);
  const channelTitle = response.body.title;

  console.log(nextUrl);

  return {
    result: response.body.channels.map((channel) =>
      parseRawContentsIntoCodaChannel({
        ...channel,
        channel: channelTitle,
      })
    ),
    continuation: nextUrl ? { nextUrl } : undefined,
  };
}

const channelParameter = coda.makeParameter({
  name: "channel",
  type: coda.ParameterType.String,
  description: "The channel slug or ID",
});

const userParameter = coda.makeParameter({
  name: "user",
  type: coda.ParameterType.String,
  description: "The username or ID",
});

pack.addSyncTable({
  name: "UserChannels",
  identityName: "UserChannels",

  formula: {
    name: "UserChannels",
    description: "Get list of all the channels for a user",
    parameters: [userParameter],
    execute: listUserChannels,
  },

  schema: channel,
});

pack.addSyncTable({
  name: "ChannelContents",
  identityName: "ChannelContent",

  formula: {
    name: "GetChannel",
    description: "get contents of a channel.",
    // If your formula requires one or more inputs, you’ll define them here.
    // Here, we're creating a string input called “name”.
    parameters: [channelParameter],

    // Everything inside this execute statement will happen anytime your Coda function is called in a doc.
    // An array of all user inputs is always the 1st parameter.
    execute: getChannelContents,
  },
  // The resultType defines what will be returned in your Coda doc. Here, we're returning a simple text string.
  schema: channelContent,
});

pack.addFormula({
  name: "Channel",
  description: "Get a channel by ID or slug",
  parameters: [channelParameter],
  execute: getChannel,
  resultType: coda.ValueType.Object,
  schema: channel,
});

pack.addFormula({
  name: "User",
  description: "Get a user by ID or slug",
  parameters: [userParameter],
  execute: getUser,
  resultType: coda.ValueType.Object,
  schema: collaboratorSchema,
});

pack.addColumnFormat({
  name: "Channel",
  formulaName: "Channel",
});
