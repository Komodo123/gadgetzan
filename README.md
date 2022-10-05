

# Battle.net API SDK

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Creating a Client](#creating-a-client)
  - [Examples](#examples)
- [API Reference](#reference)
  - [High-Level](#high-level)
    - [World of Warcraft](#high-level-world-of-warcraft)
    - [World of Warcraft (Classic)](#high-level-world-of-warcraft-classic)
  - [Low-Level](#low-level)
    - [Diablo III](#low-level-diablo-iii)
    - [Hearthstone](#low-level-hearthstone)
    - [Starcraft II](#low-level-starcraft-ii)
    - [Starcraft II (Legacy)](#low-level-starcraft-ii-legacy)
    - [World of Warcraft](#low-level-world-of-warcraft)
    - [World of Warcraft (Retail)](#low-level-world-of-warcraft-retail)
    - [World of Warcraft (Retail Profile)](#low-level-world-of-warcraft-retail-profile)
    - [World of Warcraft (Classic)](#low-level-world-of-warcraft-classic)

## Features

* Full Battle.net API coverage for Diablo III, Hearthstone, StarCraft II, and World of Warcraft.
* Automatic access token handling and renewal.
* Built-in throttling to match Blizzard's rate limits (36,000 requests per hour, 100 requests per second).
* File-based request caching to save API responses that do not change frequently.
* Automatic request-retries for intermittent failures.
* Lightning-fast promise-based resolution for getting index entry details.
* High-level convenience objects and methods for common practical tasks.

## Getting Started

### Installation

`npm install --save battle.net`

### Creating a Client

To create a client, you need to register an application with Blizzard: https://develop.battle.net/access/clients. Use the client ID and client secret found on your application details page to create the battle.net client:

```
const { Client } = require ('battle.net');

const client = new Client (
  process.env.BATTLE_NET_CLIENT_ID,
  process.env.BATTLE_NET_CLIENT_SECRET
);
```

You can optionally pass a third argument with the following configurable options (defaults provided):

```
{
  region: 'us',
  locale: 'en_US',
  retries: 3,
  timeout: 5000,
  concurrency: 5,

  cache: {
    enabled: true,
    ttl: 60 * 60 * 24,
    file: '.cache'
  }
}
```

High-level API functions are available through each game's short-name (Note: at the moment there are no high-level functions defined for Diablo III, Hearthstone, or Starcraft II):

* **Diablo III**: `client.d3`
* **Hearthstone**: `client.hs`
* **Starcraft II**: `client.sc2`
* **World of Warcraft (Retail)**: `client.wow.retail`
* **World of Warcraft (Classic)**: `client.wow.classic`

Low-level direct battle.net API calls are available through each game's short-name's API property:

 * **Diablo III**: `client.d3.api`
* **Hearthstone**: `client.hs.api`
* **Starcraft II**: `client.sc2.api`
* **Starcraft II (Legacy)**: `client.sc2.api.legacy`
* **World of Warcraft (Retail)**: `client.wow.retail.api`
* **World of Warcraft (Retail Profile)**: `client.wow.retail.api.profile`
* **World of Warcraft (Classic)**: `client.wow.classic.api`

Note: The World of Warcraft retail profile API requires an access token generated with the [authorization code flow](https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow). This library does not currently handle this flow. To generate this access token, you can use [passport-bnet](http://www.passportjs.org/packages/passport-bnet/) or equivalent. Once the access token is generated, you can import it using the `client.setAccessToken (accessToken)` method. Note that automatic token renewal is not supported for access tokens granted using this flow, but it will allow you authorized access to the `client.wow.retail.api.profile` methods.

The last parameter in every method is an optional options object which allows customizing the following parameters on a per-request basis:

```
{
  params: { key: value, ... },
  retries: number
  timeout: number,
  cache: false | true | { enabled: boolean, ttl: number, file: string }
}
```

For example, if the client's default region is `us` but you need to request details for a region in `eu`, you can:

```
client.wow.classic.getRegions ({ params: { region: 'eu' }});`
```

Some methods such as `client.wow.getItems` override user-defined parameters if specified such as `id`, `orderBy`, and `pageSize` to ensure working and efficient pagination requests to Blizzard. Overrides are used sparingly and only when necessary to decrease the chance of user-defined inputs causing an error.

### Examples

#### World of Warcraft (Classic) - Get all horde auctions on Grobbulus:

```
let realms = await client.wow.classic.getConnectedRealms ();
let realm = realms.find (realm => realm.is ('Grobbulus'));
let auctions = await realm.getAuctions ();

console.log (auctions.horde);
```

#### World of Warcraft - Loop through every available item:

```
let items = await client.wow.classic.getItems ();

for await (let item of items) {
  console.log (item);
}
```

#### World of Warcraft - Get the item icon for Jeeves:

```
let item = await client.wow.classic.getItem ('Jeeves');
let icon = await item.getIcon ();

console.log (icon);
```

#### World of Warcraft (Classic) - Loop through all available regions in Europe:

```
let regions = await client.wow.classic.getRegions ({ params: { region: 'eu' }});

console.log (regions);
```

#### World of Warcraft (Classic) - Using the low-level API to get a region by ID directly:

```
let region = await client.wow.classic.api.getRegion (43, { params: { region: 'eu' }});

console.log (region);
```


## API Reference

### High-Level

#### World of Warcraft <a name="high-level-world-of-warcraft"></a>
*client.wow.classic* and *client.wow.retail*

 `async getConnectedRealms (options): ConnectedRealm []`

 `async getItem (name, options): Item`

 `async getItemById (itemId, options): Item`

 `async* getItems (name, options): AsyncGenerator<Item>`

 `async getRegions (options): Region []`

#### World of Warcraft (Classic) <a name="high-level-world-of-warcraft-classic"></a>
*client.wow.classic*

`async getAuctionHousesIndex (connectedRealmId, options)`

### Low-Level

#### Diablo III <a name="low-level-diablo-iii"></a>
*client.d3.api*

`async getActIndex (options)`

`async getAct (actId, options)`

`async getArtisan (artisanSlug, options)`

`async getRecipe (artisanSlug, recipeSlug, options)`

`async getFollower (followerSlug, options)`

`async getCharacterClass (classSlug, options)`

`async getApiSkill (classSlug, skillSlug, options)`

`async getItemTypeIndex (options)`

`async getItemType (itemTypeSlug, options)`

`async getItem (itemSlugAndId, options)`

`async getApiAccount (battleTag, options)`

`async getApiHero (battleTag, heroId, options)`

`async getApiDetailedHeroItems (battleTag, options)`

`async getApiDetailedFollowerItems (battleTag, options)`

`async getSeasonIndex (options)`

`async getSeason (seasonId, options)`

`async getSeasonLeaderboard (seasonId, leaderboardId, options)`

`async getEraIndex (options)`

`async getEra (eraId, options)`

`async getEraLeaderboard (eraId, leaderboardId, options)`

#### Hearthstone <a name="low-level-hearthstone"></a>
*client.hs.api*

`async searchCards ({ attack, classSlug, collectible, gameMode, health, keyword, manaCost, minionType, order, page, pageSize, rarity, set, sort, spellSchool, textFilter, type }, options)`

`async searchBattlegroundCards ({ attack, gameMode, health, keyword, minionType, order, page, pageSize, sort, textFilter, tier }, options)`

`async searchMercenaryCards ({ attack, defaultMercenary, gameMode, health, minionType, mercenaryId, mercenaryRole, order, page, pageSize, sort, textFilter }, options)`
`async getCard (idOrSlug, options)`

`async searchCardbacks ({ cardBackCategory, order, page, pageSize, sort, textFilter }, options)`

`async getCardback (idOrSlug, options)`

`async getDeckByCode ({ code, ids, hero }, options)`

`async getAllMetadata (options)`

`async getSpecificMetadata (type, options)`

#### Starcraft II <a name="low-level-starcraft-ii"></a>
 *client.sc2.api*

`async getStaticProfile (regionId, options)`

`async getProfileMetaData (regionId, realmId, profileId, options)`

`async getProfile (regionId, realmId, profileId, options)`

`async getLadderSummary (regionId, realmId, profileId, options)`

`async getLadderSummary (regionId, realmId, profileId, ladderId, options)`

`async getGrandmasterLeaderboard (regionId, options)`

`async getGrandmasterLeaderboard (regionId, options)`

`async getSeason (regionId, options)`

`async getPlayer (accountId, options)`

`async getLeagueData (seasonId, queueId, teamType, leagueId, options)`

#### Starcraft II (Legacy) <a name="low-level-starcraft-ii-legacy"></a>
*client.sc2.api.legacy*

`async getProfile (regionId, realmId, profileId, options)`

`async getLadders (regionId, realmId, profileId, options)`

`async getMatchHistory (regionId, realmId, profileId, options)`

`async getLadder (regionId, ladderId, options)`

`async getAchievements (regionId, options)`

`async getRewards (regionId, options)`

#### World of Warcraft <a name="low-level-world-of-warcraft"></a>
*client.wow.classic.api* and *client.wow.retail.api*

`async getConnectedRealmsIndex (options)`

`async getConnectedRealm (connectedRealmId, options)`

`async searchConnectedRealms ({ status, timezone, orderBy, page }, options)`

`async getCreatureFamiliesIndex (options)`

`async getCreatureFamily (creatureFamilyId, options)`

`async getCreatureTypesIndex (options)`

`async getCreatureType (creatureTypeId, options)`

`async getCreature (creatureId, options)`

`async searchCreatures ({ name, orderBy, page }, options)`

`async getCreatureDisplayMedia (creatureDisplayId, options)`

`async getCreatureFamilyMedia (creatureFamilyId, options)`

`async getGuildCrestComponentsIndex (options)`

`async getGuildCrestBorderMedia (borderId, options)`

`async getGuildCrestEmblemMedia (emblemId, options)`

`async getItemClassesIndex (options)`

`async getItemClass (itemClassId, options)`

`async getItemSubclass (itemClassId, itemSubclassId, options)`

`async getItem (itemId, options)`

`async getItemMedia (itemId, options)`

`async searchItems ({ id, name, orderBy, page }, options)`

`async searchMedia ({ tags, orderBy, page }, options)`

`async getPlayableClassesIndex (options)`

`async getPlayableClass (classId, options)`

`async getPlayableClassMedia (playableClassId, options)`

`async getPlayableRacesIndex (options)`

`async getPlayableRace (playableRaceId, options)`

`async getPowerTypesIndex (options)`

`async getPowerType (powerTypeId, options)`

`async getPvPSeasonsIndex (options)`

`async getPvPSeason (pvpSeasonId, options)`

`async getRealmsIndex (options)`

`async getRealm (realmSlug, options)`

`async searchRealms ({ timezone, orderBy, page }, options)`

`async getRegion (regionId, options)`

`async getRegionsIndex (options)`

`async getRegion (regionId, options)`

#### World of Warcraft (Retail) <a name="low-level-world-of-warcraft-retail"></a>
*client.wow.retail.api*

`async getAchievementCategoriesIndex (options)`

`async getAchievementCategory (achievementCategoryId, options)`

`async getAchievementsIndex (options)`

`async getAchievement (achievementId, options)`

`async getAchievementMedia (achievementId, options)`

`async getAuctions (connectedRealmId, options)`

`async getAzeriteEssencesIndex (options)`

`async getAzeriteEssence (azeriteEssenceId, options)`

`async searchAzeriteEssences ({ allowedSpecializations, orderBy, page }, options)`

`async getAzeriteEssenceMedia (azeriteEssenceId, options)`

`async getCovenantsIndex (options)`

`async getCovenant (covenantId, options)`

`async getCovenantMedia (covenantId, options)`

`async getSoulbindsIndex (options)`

`async getSoulbind (soulbindId, options)`

`async getConduitsIndex (options)`

`async getConduit (conduitId, options)`

`async getItemSetsIndex (options)`

`async getItemSet (itemSetId, options)`

`async getJournalExpansionsIndex (options)`

`async getJournalExpansion (journalExpansionId, options)`

`async getJournalEncountersIndex (options)`

`async getJournalEncounter (journalEncounterId, options)`

`async searchJournalEncounters ({ instanceName, orderBy, page }, options)`

`async getJournalInstancesIndex (options)`

`async getJournalInstance (journalInstanceId, options)`

`async getJournalInstanceMedia (journalInstanceId, options)`

`async getModifiedCraftingsIndex (options)`

`async getModifiedCraftingCategoriesIndex (options)`

`async getModifiedCraftingCategory (categoryId, options)`

`async getModifiedCraftingReagentSlotTypeIndex (categoryId, options)`

`async getModifiedCraftingReagentSlotType (slotTypeId, options)`

`async getMountsIndex (options)`

`async getMount (mountId, options)`

`async searchMounts ({ name, orderBy, page }, options)`

`async getMythicKeystoneAffixesIndex (options)`

`async getMythicKeystoneAffix (keystoneAffixId, options)`

`async getMythicKeystoneAffixMedia (keystoneAffixId, options)`

`async getMythicKeystoneDungeonsIndex (options)`

`async getMythicKeystoneDungeon (dungeonId, options)`

`async getMythicKeystoneIndex (options)`

`async getMythicKeystonePeriodsIndex (options)`

`async getMythicKeystonePeriod (periodId, options)`

`async getMythicKeystoneSeasonsIndex (options)`

`async getMythicKeystoneSeason (seasonId, options)`

`async getMythicKeystoneLeaderboardsIndex (connectedRealmId, options)`

`async getMythicKeystoneLeaderboard (connectedRealmId, dungeonId, period, options)`

`async getMythicRaidLeaderboard (raid, faction, options)`

`async getPetsIndex (options)`

`async getPet (petId, options)`

`async getPetMedia (petId, options)`

`async getPetAbilitiesIndex (options)`

`async getPetAbility (petAbilityId, options)`

`async getPetAbilityMedia (petAbilityId, options)`

`async getPvPTalentSlots (classId, options)`

`async getPlayableSpecializationsIndex (options)`

`async getPlayableSpecialization (specId, options)`

`async getPlayableSpecializationMedia (specId, options)`

`async getProfessionsIndex (options)`

`async getProfession (professionId, options)`

`async getProfessionMedia (professionId, options)`

`async getProfessionSkillTier (professionId, skillTierId, options)`

`async getRecipe (recipeId, options)`

`async getRecipeMedia (recipeId, options)`

`async getPvPLeaderboardsIndex (pvpSeasonId, options)`

`async getPvPLeaderboard (pvpSeasonId, pvpBracket, options)`

`async getPvPRewardsIndex (pvpSeasonId, options)`

`async getQuestsIndex (options)`

`async getQuest (questId, options)`

`async getQuestCategoriesIndex (options)`

`async getQuestCategory (questCategoryId, options)`

`async getQuestAreasIndex (options)`

`async getQuestArea (questAreaId, options)`

`async getQuestTypesIndex (options)`

`async getQuestType (questTypeId, options)`

`async getReputationFactionsIndex (options)`

`async getReputationFaction (reputationFactionId, options)`

`async getReputationTiersIndex (options)`

`async getReputationTiers (reputationTiersId, options)`

`async getSpell (spellId, options)`

`async getSpellMedia (spellId, options)`

`async searchSpells ({ name, orderBy, page }, options)`

`async getSpellMedia (spellId, options)`

`async getTalentsIndex (options)`

`async getTalent (talentId, options)`

`async getPvPTalentsIndex (options)`

`async getPvPTalent (pvpTalentId, options)`

`async getTechTalentTreeIndex (options)`

`async getTalentTree (techTalentTreeId, options)`

`async getTechTalentIndex (options)`

`async getTechTalent (techTalentId, options)`

`async getTechTalentMedia (techTalentId, options)`

`async getTitlesIndex (options)`

`async getTitle (titleId, options)`

`async getWoWTokenIndex (options)`

#### World of Warcraft (Retail Profile) <a name="low-level-world-of-warcraft-retail-profile"></a>
*client.wow.retail.api.profile*

`async getAccountProfileSummary (options)`

`async getProtectedCharacterProfileSummary (realmId, characterId, options)`

`async getAccountCollectionsIndex (options)`

`async getAccountMountsCollectionSummary (options)`

`async getAccountPetsCollectionSummary (options)`

`async getCharacterAchievementsSummary (realmSlug, characterName, options)`

`async getCharacterAchievementStatistics (realmSlug, characterName, options)`

`async getCharacterAppearanceSummary (realmSlug, characterName, options)`

`async getCharacterCollectionsIndex (realmSlug, characterName, options)`

`async getCharacterMountsCollectionSummary (realmSlug, characterName, options)`

`async getCharacterPetsCollectionSummary (realmSlug, characterName, options)`

`async getCharacterEncountersSummary (realmSlug, characterName, options)`

`async getCharacterDungeons (realmSlug, characterName, options)`

`async getCharacterRaids (realmSlug, characterName, options)`

`async getCharacterEquipmentSummary (realmSlug, characterName, options)`

`async getCharacterHunterPetsSummary (realmSlug, characterName, options)`

`async getCharacterMediaSummary (realmSlug, characterName, options)`

`async getCharacterMythicKeystoneProfileIndex (realmSlug, characterName, options)`

`async getMythicKeystoneSeasonDetails (realmSlug, characterName, seasonId, options)`

`async getCharacterProfessionsSummary (realmSlug, characterName, options)`

`async getCharacterProfileSummary (realmSlug, characterName, options)`

`async getCharacterProfileStatus (realmSlug, characterName, options)`

`async getCharacterPvPBracketStatistics (realmSlug, characterName, pvpBracket, options)`

`async getCharacterPvPSummary (realmSlug, characterName, options)`

`async getCharacterQuests (realmSlug, characterName, options)`

`async getCharacterCompletedQuests (realmSlug, characterName, options)`

`async getCharacterReputationsSummary (realmSlug, characterName, options)`

`async getCharacterSoulbinds (realmSlug, characterName, options)`

`async getCharacterSpecializationsSummary (realmSlug, characterName, options)`

`async getCharacterStatisticsSummary (realmSlug, characterName, options)`

`async getCharacterTitlesSummary (realmSlug, characterName, options)`

`async getGuild (realmSlug, characterName, options)`

`async getGuildActivity (realmSlug, characterName, options)`

`async getGuildAchievements (realmSlug, characterName, options)`

`async getGuildRoster (realmSlug, characterName, options)`

#### World of Warcraft (Classic) <a name="low-level-world-of-warcraft-classic"></a>
*client.wow.classic.api*

`async getAuctionHouseIndex (connectedRealmId, options)`

`async getAuctions (connectedRealmId, auctionHouseId, options)`

`async getPvPRegionsIndex (options)`

`async getPvPRegionalSeasonsIndex (pvpRegionId, options)`

`async getPvPRegionalSeason (pvpRegionId, pvpSeasonId, options)`

`async getPvPLeaderboardsIndex (pvpRegionId, pvpSeasonId, options)`

`async getPvPLeaderboard (pvpRegionId, pvpSeasonId, pvpBracket, options)`

`async getPvPLeaderboardsIndex (pvpRegionId, pvpSeasonId, options)`