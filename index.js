import { ProfilePage } from "https://utils.kurosaki.love/lib/ProfilePageBuilder/builder.js";

/* jsonのURL */
const path = "https://link.htbt.art/hitobito.json";

var profile = new ProfilePage(path);
profile.complete();