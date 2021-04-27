module.exports = [{
	name: "server",
	code: `
	$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
$channelSendMessage[$getVar[cmdslogs];{title:Commands  Logs}
{description:$userTag[$authorID] used a command!}
{field:Command Name:\`server info\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}
{color:BLACK}]
$title[Server Information]
	$description[Current sever's information!
	
	$addField[Basic Information;\`\`\`
	Channels Count :: $channelCount
	Users Count :: $numberSeparator[$membersCount;,]
	Emojis Count :: $emojiCount
	Guild ID  :: $guildID\`\`\`;no]
	
	$addField[Server Bot Information;\`\`\`
	Upvotes :: $numberSeparator[$getServerVar[upvotes];,]
	Downvotes :: $numberSeparator[$getServerVar[downvotes];,]
	Total Votes :: $numberSeparator[$math[$getServerVar[upvotes]+$getServerVar[downvotes]];,]\`\`\`;no]
	
	$addField[Misc Information;
	Emojis :: $serverEmojis;no]]
	
	$onlyIf[$message[1]==info;]
$onlyIf[$getServerVar[blacklisted]!=true;{title:Error}
{description:You were blacklisted by $userTag[$getServerVar[blacklistedmod]] for \`$getServerVar[blacklistedreason]\` on $getServerVar[blacklisteddate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
$onlyIf[$getServerVar[blacklisteds]!=true;{title:Error}
{description:This guild was blacklisted by $userTag[$getServerVar[blacklistedsmod]] for \`$getServerVar[blacklistedsreason]\` on $getServerVar[blacklistedsdate]}
{footer:$getVar[botfooter]}
{color:BLACK}]
	$onlyIf[$isBot[$authorID]==false;]`
}]
