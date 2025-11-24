import { openTelegramLink, useLaunchParams }from "@telegram-apps/sdk-react";
import {
  AppRoot,
  Placeholder,
  TabsList,
  Cell,
  Avatar,
  Divider,
} from "@telegram-apps/telegram-ui";
import { TabsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import { useState } from "react";
const OpenThisLinkInTelegram = (url:string) => {
  if (openTelegramLink.isAvailable()){
    openTelegramLink(url);
  }
}
const App = () => {
  const lp = useLaunchParams();
  const [activeTab, setActiveTab] = useState<'Channel' | 'Group'>('Channel');
  const groups = () => {
    return (
      <div>
        <Cell
          onClick={() => OpenThisLinkInTelegram("https://t.me/raptor_codm_gap")}
          style={{
            backgroundColor: "var(--tg-theme-bg-color)",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
          before={
            <Avatar
              size={48}
              src="https://guard-tech.ir/assets/raptor_codm_gap.webp"
            />
          }
          description="A community for Raptor CODM players"
          subtitle="250 Members"
        >
          Raptor Gap
        </Cell>
        <Divider></Divider>
      </div>
    );
  };

  const channels = () => {
    return (
      <div>
        <Cell
          onClick={() => OpenThisLinkInTelegram("https://t.me/raptor_codm")}
          style={{
            backgroundColor: "var(--tg-theme-bg-color)",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
          before={
            <Avatar
              size={48}
              src="https://guard-tech.ir/assets/raptor_codm.webp"
            />
          }
          description="Raptor CODM Official Channel"
          subtitle="250 Members"
        >
          CODM CONFIG • CHEAT • DNS
        </Cell>
        <Divider />

        <Cell
          onClick={() => OpenThisLinkInTelegram("https://t.me/raptor_trust")}
          style={{
            backgroundColor: "var(--tg-theme-bg-color)",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
          before={
            <Avatar
              size={48}
              src="https://guard-tech.ir/assets/raptor_codm_trust.webp"
            />
          }
          description="Raptor CODM Trusted Channel"
          subtitle="50 Members"
        >
          Raptor • Trust
        </Cell>
      </div>
    );
  };

  return (
    <div id="container-home">
      <AppRoot platform={lp.tgWebAppPlatform === "ios" ? "ios" : "base"}>
        <div className="HIJtihMA8FHczS02iWF5">
          <Placeholder
            description="Join Raptor Community!"
            header="Raptor CODM"
          >
            <div id="sticker-container">
              <img
                alt="Telegram sticker"
                className="blt0jZBzpxuR4oDhJc8s"
                src="/src/assets/animation.gif"
              />
            </div>
          </Placeholder>
        </div>
        <TabsList>
          <TabsItem
            onClick={() => setActiveTab("Channel")}
            selected={activeTab === "Channel"}
          >
            Channel
          </TabsItem>
          <TabsItem
            onClick={() => setActiveTab("Group")}
            selected={activeTab === "Group"}
          >
            Group
          </TabsItem>
        </TabsList>
        <div>{activeTab === "Channel" ? channels() : groups()}</div>
      </AppRoot>
    </div>
  );
};
export default App;
