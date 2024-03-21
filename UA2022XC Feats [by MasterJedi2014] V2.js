/*	-INFORMATION-
	Subject:	Feats
	Effect:		This script adds the Feats from the 2022 Unearthed Arcana "Expert Classes" article.
				It also adds a modified version of the "Gunner" Feat that is effectively a firearm version of the "Crossbow Expert" Feat in this article.
				This file has been made by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference, with help from TrackAtNite from the MPMB Discord
	Date:		2024-03-20 (sheet v13.1.0)
*/

var iFileName = "UA2022XC Feats [by MasterJedi2014] V2.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/02/23",
};

SourceList["UA22XC"] = {
	name : "Unearthed Arcana 2022: Expert Classes",
	abbreviation : "UA22XC",
	date : "2022/09/29",
	url : "https://media.dndbeyond.com/compendium-images/one-dnd/expert-classes/kpx0MvyfBGHe0XKk/UA2022-Expert-Classes.pdf",
};

// 4th Lvl Feats

FeatsList["actor ua22xc"] = {
	name : "Actor (UA22XC)",
	source : [["UA22XC", 16], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Charisma 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && What('Cha') >= 13;
	},
	scores : [0, 0, 0, 0, 0, 1],
	scorestxt : "+1 Charisma",
	descriptionFull : "Skilled at mimicry and dramatics, you gain the following benefits: \n \u2022 Ability Score Increase. Increase your Charisma score by 1, to a maximum of 20. \n \u2022 Impersonation. While you’re disguised as a fictional person or a real person other than yourself, you have Advantage on Charisma Checks (Performance) to convince others that you are that person. \n \u2022 Mimicry. You can mimic the sounds of other creatures, including speech. To mimic a sound or a way of speaking, you must listen to it for at least 1 minute. Any time thereafter, you can make a DC 15 Charisma Check (Performance) to perform the mimicry; on a success, you perform it convincingly for up to 1 hour.",
	description : " \u2022 Ability Score Increase. My Charisma increases by 1, to a max of 20. \n \u2022 Impersonation. While disguised as someone else, I have Advantage on Charisma Checks (Performance) to convince others that I are that person. \n \u2022 Mimicry. After listening for at a minute, I can make a DC 15 Charisma Check (Performance) to mimic the sounds of other creatures, including speech, for an hour.",
};

FeatsList["athlete ua22xc"] = {
	name : "Athlete (UA22XC)",
	source : [["UA22XC", 16], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Strength, Dexterity, or Constitution 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (What('Str') >= 13||What('Dex') >= 13||What('Con') >= 13);
	},
	speed : {
		climb : { spd : "30", enc : 20 },
	},
	descriptionFull : "You have undergone extensive physical training to gain the following benefits: \n \u2022 Ability Score Increase. Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20. \n \u2022 Climb Speed. You gain a Climb Speed equal to my Speed. \n \u2022 Hop Up. When you are Prone, you can right yourself with only 5 feet of movement. \n \u2022 Jumping. You have Advantage on any Ability Check you make for the Jump Action.",
	description : " \u2022 Ability Score Increase. My Strength, Dexterity, or Constitution increases by 1, to a max of 20. \n \u2022 Climb Speed. I gain a Climb Speed equal to my Speed. \n \u2022 Hop Up. When I am Prone, I can right myself with only 5 feet of movement. \n \u2022 Jumping. I have Advantage on any Ability Check I make for the Jump Action.",
	choices : ['Strength +1', 'Dexterity +1', 'Constitution +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
	"constitution +1" : {
		scores : [0, 0, 1, 0, 0, 0],
		scorestxt : "+1 Constitution",
	},
};

FeatsList["charger ua22xc"] = {
	name : "Charger (UA22XC)",
	source : [["UA22XC", 16], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	descriptionFull : "You have trained to charge headlong into battle, gaining the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Improved Dash. When you take the Dash Action, your Speed increases by 10 feet for that Action. \n \u2022 Charge Attack. If you move at least 10 feet in a straight line immediately before hitting with an attack as part of the Attack Action on your turn, choose one of the following effects: gain a +1d8 bonus to the attack’s damage roll, or push the target up to 10 feet, provided the target you want to push is no more than one Size larger than you. You can use this benefit only once on each of your turns.",
	description : " \u2022 Ability Score Increase. My Strength or Dexterity increases by 1, to a max of 20. \n \u2022 Improved Dash. When I take the Dash Action, my Speed increases by 10 feet for that Action. \n \u2022 Charge Attack. If I move at least 10 ft in a line immediately before hitting with an Attack as part of the Attack action on my turn, I can either gain +1d8 bonus damage or push a target no more than one Size larger than me back 10 ft.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
};

FeatsList["crossbow expert ua22xc"] = {
	name : "Crossbow Expert (UA22XC)",
	source : [["UA22XC", 17], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	scores : [0, 1, 0, 0, 0, 0],
	scorestxt : "+1 Dexterity",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/crossbow/i).test(v.theWea.type) || (/crossbow/i).test(v.theWea.list)) {
					fields.Description = fields.Description.replace(/([;,]? ?loading|loading[;,]? ?)/i, '');
				};
			},
			"I ignore the loading quality of crossbows.",
		],
	},
	descriptionFull : "Thanks to extensive practice with crossbows, you gain the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity score by 1, to a maximum of 20. \n \u2022 Ignore Loading. You ignore the Loading property of crossbows. \n \u2022 Firing in Melee. Being within 5 feet of an enemy doesn’t impose Disadvantage on your Attack Rolls with crossbows. \n \u2022 Dual Wielding. When you make the extra attack of the Light weapon property, you can add your Ability Modifier to the damage of the extra attack if that attack is with a crossbow that has the Light property.",
	description : " \u2022 Ability Score Increase. My Dexterity increases by 1, to a max of 20. \n \u2022 Ignore Loading. I ignore the Loading property of crossbows. \n \u2022 Firing in Melee. Being within 5 feet of an enemy doesn’t impose Disadvantage on my Attack Rolls with crossbows. \n \u2022 Dual Wielding. When using the extra attack of the Light weapon property, add my Ability Modifier to the damage if extra attack is made with a crossbow with the Light property.",
};

FeatsList["defensive duelist ua22xc"] = {
	name : "Defensive Duelist (UA22XC)",
	source : [["UA22XC", 17], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Dexterity 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && What('Dex') >= 13;
	},
	scores : [0, 1, 0, 0, 0, 0],
	scorestxt : "+1 Dexterity",
	descriptionFull : "You've learned to deftly parry attacks, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity score by 1, to a maximum of 20. \n \u2022 Parry. If you are holding a Finesse Weapon and another creature hits you with a Melee Attack, you can use your Reaction to add your Proficiency Bonus to your Armor Class for that attack, potentially causing the attack to miss you.",
	description : " \u2022 Ability Score Increase. My Dexterity increases by 1, to a max of 20. \n \u2022 Parry. If holding a Finesse Weapon when hit by a Melee Attack, I can add my Proficiency Bonus to my AC.",
};

FeatsList["dual wielder ua22xc"] = {
	name : "Dual Wielder (UA22XC)",
	source : [["UA22XC", 17], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	descriptionFull : "You master fighting with two weapons, gaining the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Enhanced Dual Wielding. When you are holding a Weapon with the Light property in one hand, you can treat a non-Light Weapon in your other hand as if it had the Light property, provided that Weapon lacks the Two-Handed property. \n \u2022 Quick Draw. You can draw or stow two Weapons that lack the Two-Handed property when you would normally be able to draw or stow only one.",
	description : " \u2022 Ability Score Increase. My Strength or Dexterity increases by 1, to a max of 20. \n \u2022 Enhanced Dual Wielding. When holding a Light Weapon in one hand, I can treat a non-Light Weapon as if it were a Light Weapon so long as it isn't a Two-Handed Weapon. \n \u2022 Quick Draw. I can draw or stow two Weapons at once that lack the Two-Handed property.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
};

FeatsList["durable ua22xc"] = {
	name : "Durable (UA22XC)",
	source : [["UA22XC", 17], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Constitution 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && What('Con') >= 13;
	},
	scores : [0, 0, 1, 0, 0, 0],
	scorestxt : "+1 Constitution",
	descriptionFull : "Hardy and resilient, you gain the following benefits: \n \u2022 Ability Score Increase. Increase your Constitution score by 1, to a maximum of 20. \n \u2022 Defy Death. You have Advantage on Death Saving Throws. \n \u2022 Speedy Recovery. As a Bonus Action, you can expend one of your Hit Dice, roll the die, and regain a number of Hit Points equal to the roll.",
	description : " \u2022 Ability Score Increase. My Constitution increases by 1, to a max of 20. \n \u2022 Defy Death. I have Advantage on Death Saving Throws. \n \u2022 Speedy Recovery. I can use a Bonus Action to expend one of my Hit Dice to heal myself.",
};

FeatsList["elemental adept ua22xc"] = {
	name : "Elemental Adept (UA22XC)",
	source : [["UA22XC", 17], ["MJ:HB", 0]],
	allowDuplicates : true,
	prerequisite : "Character Level 4+; Spellcasting or Pact Magic Feature",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && v.isSpellcastingClass;
	},
	descriptionFull : "Repeatable: Yes, but you must choose a different Damage Type each time for Energy Mastery. \n In your spellcasting, you can harness a particular form of energy with deadly mastery, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. \n \u2022 Energy Mastery. Choose one of the following Damage Types: Acid, Cold, Fire, Lightning, or Thunder. Spells you cast ignore Resistance to damage of the chosen type. In addition, when you roll damage for a Spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
	description : "Repeatable: Yes, but I must choose a different Damage Type each time for Energy Mastery. \n \u2022 Ability Score Increase. My Intelligence, Wisdom, or Charisma increases by 1, to a max of 20. \n \u2022 Energy Mastery. Chose from Acid, Cold, Fire, Lightning, or Thunder. Spells cast that deal the chosen damage type ignore Resistance to that damage. Treat dice rolls of 1 as a 2 for damage rolls.",
	choices : ['Intelligence +1', 'Wisdom +1', 'Charisma +1'],
	"intelligence +1" : {
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
	},
};

FeatsList["grappler ua22xc"] = {
	name : "Grappler (UA22XC)",
	source : [["UA22XC", 19], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (What('Str') >= 13||What('Dex') >= 13);
	},
	descriptionFull : "You’re an accomplished wrestler, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Attack Advantage. You have Advantage on Attack Rolls against a creature Grappled by you. \n \u2022 Fast Wrestler. You aren’t Slowed when you move a creature Grappled by you, provided the creature is your Size or smaller. \n \u2022 Punch and Grab. When you hit a creature with an Unarmed Strike as part of the Attack Action on your turn, you can deal damage to the target and also grapple it. You can use this benefit only once per turn.",
	description : " \u2022 Ability Score Increase. My Strength or Dexterity increases by 1, to a max of 20. \n \u2022 Attack Advantage. I have Advantage on Attack Rolls against a creature Grappled by me. \n \u2022 Fast Wrestler. If it is my Size or smaller, I'm not slowed when moving a creature Grappled by me. \n \u2022 Punch and Grab. Once per turn during my Attack Action, I can both Grapple a creature and deal damage to it in the same Unarmed Strike.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
};

FeatsList["great weapon master ua22xc"] = {
	name : "Great Weapon Master (UA22XC)",
	source : [["UA22XC", 20], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	scores : [1, 0, 0, 0, 0, 0],
	scorestxt : "+1 Strength",
	action : [
		["bonus action", "Great Weapon Master (after crit or take-down)"]
	],
	descriptionFull : "You’ve learned to use the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Strength score by 1, to a maximum of 20. \n \u2022 Cleave. Immediately after you score a Critical Hit with a Melee Weapon or reduce a creature to 0 Hit Points with one, you can make one attack with the same weapon as a Bonus Action. \n \u2022 Heavy Weapon Mastery. When you hit a creature with a Heavy Weapon as part of the Attack Action on your turn, you can cause the weapon to deal extra damage to the target. The extra damage equals your Proficiency Bonus, and you can deal it only once per turn.",
	description : " \u2022 Ability Score Increase. My Strength increases by 1, to a max of 20. \n \u2022 Cleave. Critical Hitting or reducing a creature to 0 HP with a Melee Weapon, I can make one extra attack with the same weapon as a Bonus Action. \n \u2022 Heavy Weapon Mastery. Once per turn during my Attack Action, I can add my Proficiency Bonus as damage when I hit a creature with a Heavy Weapon.",
};

FeatsList["heavily armored ua22xc"] = {
	name : "Heavily Armored (UA22XC)",
	source : [["UA22XC", 20], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Medium Armor Training",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && v.mediumArmorProf;
	},
	armorProfs : [false, false, true, false],
	descriptionFull : "You have trained to use Heavy Armor effectively, gaining the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Constitution score by 1, to a maximum of 20. \n \u2022 Armor Training. You gain Heavy Armor Training.",
	description : " \u2022 Ability Score Increase. My Strength or Constitution increases by 1, to a max of 20. \n \u2022 Armor Training. I gain Heavy Armor Training.",
	choices : ['Strength +1', 'Constitution +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"constitution +1" : {
		scores : [0, 0, 1, 0, 0, 0],
		scorestxt : "+1 Constitution",
	},
};

FeatsList["heavy armor master ua22xc"] = {
	name : "Heavy Armor Master (UA22XC)",
	source : [["UA22XC", 20], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Heavy Armor Training",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && v.heavyArmorProf;
	},
	armorProfs : [false, false, true, false],
	descriptionFull : "You can use your Heavy Armor to deflect strikes, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Constitution score by 1, to a maximum of 20. \n \u2022 Damage Reduction. When you’re hit by an attack while you’re wearing Heavy Armor, any Bludgeoning, Piercing, or Slashing Damage dealt to you by that attack is reduced by an amount equal to your Proficiency Bonus.",
	description : " \u2022 Ability Score Increase. My Strength or Constitution increases by 1, to a max of 20. \n \u2022 Damage Reduction. While wearing Heavy Armor, I reduce all Bludgeoning, Piercing, or Slashing Damage taken by my Proficiency Bonus.",
	choices : ['Strength +1', 'Constitution +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"constitution +1" : {
		scores : [0, 0, 1, 0, 0, 0],
		scorestxt : "+1 Constitution",
	},
};

FeatsList["inspiring leader ua22xc"] = {
	name : "Inspiring Leader (UA22XC)",
	source : [["UA22XC", 20], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Wisdom or Charisma 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (What('Wis') >= 13||What('Cha') >= 13);
	},
	descriptionFull : "You are adept at encouraging others, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Wisdom or Charisma score by 1, to a maximum of 20. \n \u2022 Encouraging Performance. At the end of a Short Rest or a Long Rest, you can give an inspiring performance: a speech, a song, or a dance. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who witness the performance. The chosen creatures each gain Temporary Hit Points equal to 2d4 + your Proficiency Bonus.",
	description : " \u2022 Ability Score Increase. My Wisdom or Charisma increases by 1, to a max of 20. \n \u2022 Encouraging Performance. After a Short Rest or a Long Rest, I can give up to six friendly creatures that I can see (including myself) 2d4 + my Proficiency Bonus in Temp HP.",
	choices : ['Wisdom +1', 'Charisma +1'],
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
	},
};

FeatsList["keen mind ua22xc"] = {
	name : "Keen Mind (UA22XC)",
	source : [["UA22XC", 20], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Intelligence 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && What('Int') >= 13;
	},
	scores : [0, 0, 0, 1, 0, 0],
	scorestxt : "+1 Intelligence",
	skillstxt : "Proficiency with one of the following skills: Arcana, History, Investigation, Nature, or Religion; or\n   Expertise with one of the skills above that I'm already Proficient with",
	descriptionFull : "You have trained to rapidly recall or discover vital details, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Intelligence score by 1, to a maximum of 20. \n \u2022 Lore Knowledge. Choose one of the following Skills: Arcana, History, Investigation, Nature, or Religion. If you lack Proficiency in the chosen Skill, you gain Proficiency in it, and if you have Proficiency in it, you gain Expertise in it. \n \u2022 Quick Study. You can take the Study Action as a Bonus Action.",
	description : " \u2022 Ability Score Increase. My Intelligence increases by 1, to a max of 20. \n \u2022 Lore Knowledge. I gain Proficiency (or Expertise if already Proficient) in one of the following skills: Arcana, History, Investigation, Nature, or Religion. \n \u2022 Quick Study. I can take the Study Action as a Bonus Action.",
};

FeatsList["lightly armored ua22xc"] = {
	name : "Lightly Armored (UA22XC)",
	source : [["UA22XC", 21], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+",
	prereqeval : function(v) {
		return v.characterLevel >= 4;
	},
	armorProfs : [true, true, false, true],
	descriptionFull : "You gain the following Armor Training: Light Armor, Medium Armor, and Shield.",
	description : "I gain the following Armor Training: Light Armor, Medium Armor, and Shield.",
};

FeatsList["mage slayer ua22xc"] = {
	name : "Mage Slayer (UA22XC)",
	source : [["UA22XC", 21], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	descriptionFull : "You have practiced techniques useful in battling magic-users, gaining the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Concentration Breaker. When you damage a creature that is concentrating, it has Disadvantage on the Saving Throw it makes to maintain Concentration. \n \u2022 Guarded Mind. If you fail an Intelligence, a Wisdom, or a Charisma Saving Throw, you can cause yourself to succeed instead. Once you use this benefit, you can’t use it again until you finish a Long Rest.",
	description : " \u2022 Ability Score Increase. My Strength or Dexterity increases by 1, to a max of 20. \n \u2022 Concentration Breaker. Concentrating creatures damaged by me have Disadvantage on Saving Throws to maintain Concentration. \n \u2022 Guarded Mind. Once per Long Rest, I can choose to succeed an Intelligence, a Wisdom, or a Charisma Saving Throw I would have otherwise failed.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
};

FeatsList["medium armor master ua22xc"] = {
	name : "Medium Armor Master (UA22XC)",
	source : [["UA22XC", 21], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Medium Armor Training",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && v.mediumArmorProf;
	},
	eval : function () {
		Value('Medium Armor Max Mod', 3);
		ApplyArmor(What("AC Armor Description"));
	},
	removeeval : function () {
		tDoc.resetForm(['Medium Armor Max Mod']);
		ApplyArmor(What("AC Armor Description"));
	},
	descriptionFull : "You have practiced moving in medium armor to gain the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Dexterous Wearer. While you are wearing Medium Armor, you can add 3, rather than 2, to your AC if you have a Dexterity score of 16 or higher.",
	description : " \u2022 Ability Score Increase. My Strength or Dexterity increases by 1, to a max of 20. \n \u2022 Dexterous Wearer. While wearing Medium Armor, I can add +3 instead of +2 to my AC.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
};

FeatsList["mounted combatant ua22xc"] = {
	name : "Mounted Combatant (UA22XC)",
	source : [["UA22XC", 21], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	descriptionFull : "You have developed a bond with your mounts, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Strength, Dexterity, or Wisdom score by 1, to a maximum of 20. \n \u2022 Mount Handler. You have Advantage on Wisdom Checks (Animal Handling) made to handle or train horses and other Beasts employed as mounts. \n \u2022 Mounted Strike. While mounted, you have Advantage on Attack Rolls against any creature that is within 5 feet of your mount and at least one Size smaller than it. \n \u2022 Leap Aside. If your mount is subjected to an effect that allows it to make a Dexterity Saving Throw to take only half damage, it instead takes no damage if it succeeds on the Saving Throw, and only half damage if it fails. For your mount to gain this benefit, you must be riding it, and neither of you can be Incapacitated. \n \u2022 Veer. While mounted, you can use your Reaction to force an attack that hits your mount to hit you instead.",
	description : " \u2022 Ability Score Increase. My Strength, Dexterity, or Wisdom increases by 1, to a max of 20. \n \u2022 Mount Handler. Advantage on Wisdom Checks (Animal Handling) made to handle/train horses & other Beasts used as mounts. \n \u2022 Mounted Strike. Advantage against any creature within 5ft of & at least one Size smaller than my mount. \n \u2022 Leap Aside. When I am riding it and when neither of us are Incapacitated, my mount takes reduced damage from effects calling for a Dexterity Saving Throw; It takes no damage if it succeeds, and half damage if it fails. \n \u2022 Veer. While mounted, I can use my Reaction to force an attack that hits my mount to hit me instead.",
	choices : ['Strength +1', 'Dexterity +1', 'Wisdom +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
};

FeatsList["observant ua22xc"] = {
	name : "Observant (UA22XC)",
	source : [["UA22XC", 21], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Intelligence or Wisdom 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (What('Int') >= 13||What('Wis') >= 13);
	},
	skillstxt : "Proficiency with one of the following skills: Insight, Investigation, or Perception; or\n   Expertise with one of the skills above that I'm already Proficient with",
	descriptionFull : "Quick to notice details around you, you gain the following benefits: \n \u2022 Ability Score Increase. Increase your Intelligence or Wisdom score by 1, to a maximum of 20. \n \u2022 Keen Observer. Choose one of the following Skills: Insight, Investigation, or Perception. If you lack Proficiency with the chosen Skill, you gain Proficiency in it, and if you have Proficiency in it, you gain Expertise in it. \n \u2022 Quick Search. You can take the Search Action as a Bonus Action.",
	description : " \u2022 Ability Score Increase. My Intelligence or Wisdom increases by 1, to a max of 20. \n \u2022 Keen Observer. I gain Proficiency (or Expertise if already Proficient) in one of the following skills: Insight, Investigation, or Perception.  \n \u2022 Quick Search. I can take the Search Action as a Bonus Action.",
	choices : ['Intelligence +1', 'Wisdom +1'],
	"intelligence +1" : {
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
};

FeatsList["polearm master ua22xc"] = {
	name : "Polearm Master (UA22XC)",
	source : [["UA22XC", 21], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	scores : [1, 0, 0, 0, 0, 0],
	scorestxt : "+1 Strength",
	action : [
		["bonus action", "Butt End Attack (after attack with polearm)"]
	],
	descriptionFull : "You have trained extensively with pole weapons that have Reach, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Strength score by 1, to a maximum of 20. \n \u2022 Pole Strike. Immediately after you take the Attack Action and attack with a Weapon that has the Heavy and Reach properties, you can use a Bonus Action to make a Melee Attack with the opposite end of the Weapon. The weapon’s damage die for this attack is a d4, and it deals Bludgeoning Damage. \n \u2022 Reactive Strike. While you are holding a Weapon that has the Heavy and Reach properties, you can use your Reaction to make one Melee Attack against a creature that enters the Reach you have with that Weapon.",
	description : " \u2022 Ability Score Increase. My Strength increases by 1, to a max of 20. \n \u2022 Pole Strike. If I attack with a Weapon with the Heavy & Reach properties during my Attack Action, I can immediately use my Bonus Action to attack with the other end of the weapon, dealing 1d4 Bludgeoning damage on a hit. \n \u2022 Reactive Strike. While holding a Weapon with the Heavy & Reach properties, I can make an opportunity attack when a creature enters my reach.",
};

FeatsList["resilient ua22xc"] = {
	name : "Resilient (UA22XC)",
	source : [["UA22XC", 22], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+",
	prereqeval : function(v) {
		return v.characterLevel >=4;
	},
	descriptionFull : "You have developed the resilience to better withstand certain dangers, granting you the following benefits: \n \u2022 Ability Score Increase. Choose one ability in which you lack Saving Throw Proficiency. Increase the chosen Ability Score by 1, to a maximum of 20. \n \u2022 Saving Throw Proficiency. You gain Saving Throw Proficiency with the chosen ability.",
	description : " \u2022 Ability Score Increase. Choose one ability in which I lack Saving Throw Proficiency. Increase the chosen Ability Score by 1, to a maximum of 20. \n \u2022 Saving Throw Proficiency. I gain Saving Throw Proficiency with the chosen ability.",
	choices : ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
	"strength" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
		saves : ["Str"],
	},
	"dexterity" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
		saves : ["Dex"],
	},
	"constitution" : {
		scores : [0, 0, 1, 0, 0, 0],
		scorestxt : "+1 Constitution",
		saves : ["Con"],
	},
	"intelligence" : {
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
		saves : ["Int"],
	},
	"wisdom" : {
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
		saves : ["Wis"],
	},
	"charisma" : {
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
		saves : ["Cha"],
	},
};

FeatsList["ritual caster ua22xc"] = {
	name : "Ritual Caster (UA22XC)",
	source : [["UA22XC", 22], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Intelligence, Wisdom, or Charisma 13+",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && (What('Int') >= 13||What('Wis') >= 13||What('Cha') >= 13);
	},
	descriptionFull : "You have studied ritual magic, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. \n \u2022 Ritual Spells. Choose two 1st-level Spells that have the Ritual tag from the Bard, Cleric, Druid, Sorcerer, Warlock, and Wizard Spell Lists. You always have those two Spells prepared, and you can cast them with any Spell Slots you have. The Spells’ Spellcasting Ability is the ability increased by this Feat. \n \u2022 Quick Ritual. With this benefit, you can cast a Ritual Spell that you have prepared using its regular casting time, rather than the extended time for a Ritual. Doing so doesn’t require a Spell Slot. Once you cast the Spell in this way, you can’t use this benefit again until you finish a Long Rest.",
	description : " \u2022 Ability Score Increase. My Intelligence, Wisdom, or Charisma increases by 1, to a max of 20. \n \u2022 Ritual Spells. I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual spells. I can copy ritual spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). \n \u2022 Quick Ritual. Once per Long Rest, I can cast a prepared Ritual Spell using its regular casting time, rather than the extended time for a Ritual, and without requiring a Spell Slot.",
	choices : ['Intelligence +1', 'Wisdom +1', 'Charisma +1'],
	"intelligence +1" : {
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
		spellcastingBonus : [{
			name : "1st-level Wizard ritual spell",
			times : 2,
			selection : ["alarm", "comprehend languages", "detect magic", "find familiar", "identify", "illusory script", "tenser's floating disk", "unseen servant"],
			firstCol : "oncelr",
		}],
		spellcastingAbility : 4,
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
		spellcastingBonus : [{
			name : "1st-level Cleric or Druid ritual spell",
			times : 2,
			selection : ["ceremnoy", "detect magic", "detect poison and disease", "purify food and drink", "speak with animals"],
			firstCol : "oncelr",
		}],
		spellcastingAbility : 5,
	},
	"charisma +1" : {
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
		spellcastingBonus : [{
			name : "1st-level Bard, Sorcerer, or Warlock ritual spell",
			times : 2,
			selection : ["comprehend languages", "detect magic", "identify", "illusory script", "speak with animals", "unseen servant"],
			firstCol : "oncelr",
		}],
		spellcastingAbility : 6,
	},
	// I am not sure if I did the above spell code right.
};

FeatsList["sentinel ua22xc"] = {
	name : "Sentinel (UA22XC)",
	source : [["UA22XC", 22], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	action : [
		["reaction", "Sentinel (after attack on ally)"]
	],
	descriptionFull : "You have mastered techniques to take advantage of every drop in any enemy’s guard, gaining the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Guardian. Immediately after a creature within 5 feet of you takes the Disengage Action or hits a target other than you with an attack, you can make an Opportunity Attack against that creature. \n \u2022 Halt. When you hit a creature with an Opportunity Attack, the creature’s Speed becomes 0 for the rest of the turn.",
	description : " \u2022 Ability Score Increase. My Strength or Dexterity increases by 1, to a max of 20. \n \u2022 Guardian. The Disengage action doesn't work on me. When a creature within 5 ft makes an attack against a target other than me, I can use my reaction to make a melee weapon attack against the attacker. \n \u2022 Halt. Creatures I hit with opportunity attacks have 0 speed for this turn.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
};

FeatsList["sharpshooter ua22xc"] = {
	name : "Sharpshooter (UA22XC)",
	source : [["UA22XC", 22], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	scores : [0, 1, 0, 0, 0, 0],
	scorestxt : "+1 Dexterity",
	descriptionFull : "You can make shots that others find impossible, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity score by 1, to a maximum of 20. \n \u2022 Bypass Cover. Your Ranged Attacks with Weapons ignore Half Cover and Three- Quarters Cover. \n \u2022 Firing in Melee. Being within 5 feet of an enemy doesn’t impose Disadvantage on your ranged Attack Rolls with Weapons. \n \u2022 Long Shots. Attacking at Long Range doesn’t impose Disadvantage on your ranged Attack Rolls with Weapons.",
	description : " \u2022 Ability Score Increase. My Dexterity increases by 1, to a max of 20. \n \u2022 Bypass Cover. I ignore all forms of Cover except Full Cover. \n \u2022 Firing in Melee. Being within 5 feet of an enemy doesn’t impose Disadvantage on my ranged Attack Rolls with Weapons. \n \u2022 Long Shots. Long Range shots with Weapons are no longer at Disadvantage.",
};

FeatsList["shield master ua22xc"] = {
	name : "Shield Master (UA22XC)",
	source : [["UA22XC", 23], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Shield Training",
	prereqeval : function(v) {
		return v.characterLevel >=4 && v.shieldProf;
	},
	scores : [1, 0, 0, 0, 0, 0],
	scorestxt : "+1 Strength",
	action : [
		["bonus action", "Shove with shield (with Attack action)"]
		["reaction", "Interpose shield (if Dex save half dmg)"]
	],
	descriptionFull : "You’ve trained to use shields not just for protection, but also for offense, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Strength score by 1, to a maximum of 20. \n \u2022 Shield Bash. If you attack a creature within 5 feet of you as part of the Attack Action and hit with a Melee Weapon, you can immediately bash the target with your Shield if it’s equipped, forcing the target to make a Strength Saving Throw against a DC equal to 8 + your Strength modifier + your Proficiency Bonus. \n On a failed save, you knock the target Prone or push it 5 feet away. You can use this benefit only once on each of your turns. \n \u2022 Interpose Shield. If you are subjected to an effect that allows you to make a Dexterity Saving Throw to take only half damage, you can use your Reaction to take no damage if you succeed on the Saving Throw and are wielding a Shield, interposing your shield between yourself and the source of the effect.",
	description : " \u2022 Ability Score Increase. My Strength increases by 1, to a max of 20. \n \u2022 Shield Bash. As a bonus action, when I use the Attack action, I can shove someone within 5 ft with my shield. They must fail a Strength Save against a DC equal to 8 + my Str Mod + my Prof Bonus to be shoved. \n \u2022 Interpose Shield. As a reaction, if I succeed on a Dex save for half damage, I can interpose my shield to avoid the damage.",
};

FeatsList["skulker ua22xc"] = {
	name : "Skulker (UA22XC)",
	source : [["UA22XC", 23], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Dexterity 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && What('Dex') >= 13;
	},
	scores : [0, 1, 0, 0, 0, 0],
	scorestxt : "+1 Dexterity",
	vision : [
		["Blindsight", 10],
	],
	descriptionFull : "You are an expert at slinking through shadows, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity score by 1, to a maximum of 20. \n \u2022 Blindsight. You have Blindsight with a range of 10 feet. \n \u2022 Fog of War. Exploiting the distractions of battle, you have Advantage on any Dexterity Check (Stealth) you make as part of the Hide Action during combat. \n \u2022 Sniper. If you make an Attack Roll while Hidden and the roll misses, making the Attack Roll doesn’t end the Hidden Condition on you.",
	description : " \u2022 Ability Score Increase. My Dexterity increases by 1, to a max of 20. \n \u2022 Blindsight. I have Blindsight with a range of 10 feet. \n \u2022 Fog of War. I have Advantage of Dexterity Checks (Stealth) I make as part of the Hide Action during combat. \n \u2022 Sniper. Missing an Attack Roll while Hidden doesn't end the Hidden Condition on me.",
};

FeatsList["speedster ua22xc"] = {
	name : "Speedster (UA22XC)",
	source : [["UA22XC", 23], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Dexterity 13+",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (What('Dex') >= 13||What('Con') >= 13);
	},
	speed : {
		allModes : "+10",
		stopeval : function (v) {
		return v.wearingArmor !==-1 && v.theArmor.type == heavyArmor;
		},
	},
	// I am not sure if I did the above stopeval code right.
	descriptionFull : "You possess exceptional speed and stamina, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity or Constitution score by 1, to a maximum of 20. \n \u2022 Speed Increase. Your Speed increases by 10 feet while you aren’t wearing Heavy Armor. \n \u2022 Dash Over Difficult Terrain. When you take the Dash Action on your turn, Difficult Terrain doesn’t cost you extra movement for the rest of that turn.",
	description : " \u2022 Ability Score Increase. My Dexterity or Constitution increases by 1, to a max of 20. \n \u2022 Speed Increase. My Speed increases by 10 feet when not wearing Heavy Armor. \n \u2022 Dash Over Difficult Terrain. I ignore Difficult Terrain while Dashing.",
	choices : ['Dexterity +1', 'Constitution +1'],
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
	"constitution +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Constitution",
	},
};

FeatsList["spell sniper ua22xc"] = {
	name : "Spell Sniper (UA22XC)",
	source : [["UA22XC", 23], ["MJ:HB", 0]],
	allowDuplicates : true,
	prerequisite : "Character Level 4+; Spellcasting or Pact Magic Feature",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && v.isSpellcastingClass;
	},
	descriptionFull : "You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits: \n \u2022 Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. \n \u2022 Bypass Cover. Your Attack Rolls for Spells ignore Half Cover and Three-Quarters Cover. \n \u2022 Casting in Melee. Being within 5 feet of an enemy doesn’t impose Disadvantage on your Attack Rolls with Spells. \n \u2022 Increased Range. When you cast a Spell that has a range of at least 10 feet and that requires you to make an Attack Roll, you can increase the Spell’s range by 60 feet.",
	description : " \u2022 Ability Score Increase. My Intelligence, Wisdom, or Charisma increases by 1, to a max of 20. \n \u2022 Bypass Cover. I ignore all forms of Cover except Full Cover. \n \u2022 Casting in Melee. Being within 5 feet of an enemy doesn’t impose Disadvantage on my Attack Rolls with spells. \n \u2022 Increased Range. Spells with a range of at least 10 ft that require an Attack Roll have an additional 60 ft of range.",
	choices : ['Intelligence +1', 'Wisdom +1', 'Charisma +1'],
	"intelligence +1" : {
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
	},
};

FeatsList["war caster ua22xc"] = {
	name : "War Caster (UA22XC)",
	source : [["UA22XC", 23], ["MJ:HB", 0]],
	allowDuplicates : true,
	prerequisite : "Character Level 4+; Spellcasting or Pact Magic Feature",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && v.isSpellcastingClass;
	},
	savetxt : {
		text : "Adv. on Con (Concentration) saves when damaged",
	},
	action : [
		["reaction", " - Opportunity Spell"],
	],
	descriptionFull : "You have practiced casting spells in the midst of combat, granting you the following benefits: \n \u2022 Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. \n \u2022 Concentration. You have Advantage on Constitution Saving Throws that you make to maintain your Concentration. \n \u2022 Reactive Spell. When a creature provokes an Opportunity Attack from you by moving out of your Reach, you can use your Reaction to cast a Spell at the creature, rather than making an Opportunity Attack. The Spell must have a casting time of one Action and must target only that creature. \n \u2022 Somatic Components. You can perform the Somatic Components of Spells even when you have Weapons or a Shield in one or both hands.",
	description : " \u2022 Ability Score Increase. My Intelligence, Wisdom, or Charisma increases by 1, to a max of 20. \n \u2022 Concentration. Advantage on Constitution Saving Throws to maintain Concentration. \n \u2022 Reactive Spell. Cast spell of 1 action casting time that targets only one creature instead of an opportunity attack. \n \u2022 Somatic Components. Perform somatic components even when holding weapons or shield in one or both hands.",
	choices : ['Intelligence +1', 'Wisdom +1', 'Charisma +1'],
	"intelligence +1" : {
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
	},
};

FeatsList["weapon training ua22xc"] = {
	name : "Weapon Training (UA22XC)",
	source : [["UA22XC", 24], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+",
	prereqeval : function(v) {
		return v.characterLevel >=4;
	},
	weaponProfs : [false, true],
	descriptionFull : "You have practiced extensively with a variety of weapons, gaining the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Weapon Proficiency. You gain Martial Weapon Proficiency.",
	description : " \u2022 Ability Score Increase. My Strength or Dexterity increases by 1, to a max of 20. \n \u2022 Weapon Proficiency. I gain Martial Weapon Proficiency.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
};

// Modified version of the "Gunner" Feat that is effectively a firearm version of the "Crossbow Expert" Feat, minus the "Dual Wielding" feature, since the original "Gunner" has no such feature.

FeatsList["gunner ua22xc"] = {
	name : "Gunner (UA22XC)",
	source : [["UA22XC", 17], ["T", 80], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+; Proficiency with Any Martial Weapon",
	prereqeval : function(v) {
		return v.characterLevel >=4 && (v.martialWeaponsProf||v.otherWeaponsProf.some(function (n) {
			return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
		}));
	},
	scores : [0, 1, 0, 0, 0, 0],
	scorestxt : "+1 Dexterity",
	weaponProfs : [false, false, ["Firearms"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/firearm/i).test(v.theWea.type) || (/firearm/i).test(v.theWea.list)) {
					fields.Description = fields.Description.replace(/([;,]? ?loading|loading[;,]? ?)/i, '');
				};
			},
			"I ignore the loading quality of firearms.",
		],
	},
	descriptionFull : "Thanks to extensive practice with firearms, you gain the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity score by 1, to a maximum of 20. \n \u2022 Ignore Loading. You ignore the Loading property of firearms. \n \u2022 Firing in Melee. Being within 5 feet of an enemy doesn’t impose Disadvantage on your Attack Rolls with firearms.",
	description : " \u2022 Ability Score Increase. My Dexterity increases by 1, to a max of 20. \n \u2022 Ignore Loading. I ignore the Loading property of firearms. \n \u2022 Firing in Melee. Being within 5 feet of an enemy doesn’t impose Disadvantage on my Attack Rolls with firearms.",
};

// 20th Lvl (Epic Boon) Feats

FeatsList["epic boon of combat prowess ua22xc"] = {
	name : "Epic Boon of Combat Prowess (UA22XC)",
	source : [["UA22XC", 18], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Warrior Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.barbarian || classes.known.fighter || classes.known.monk || classes.known.ranger || classes.known.rogue);
	},
	description : "When I miss with a Melee Attack, I can hit instead. Once I use this benefit, I can’t use it again until I roll Initiative.",
};

FeatsList["epic boon of fortitude ua22xc"] = {
	name : "Epic Boon of Fortitude (UA22XC)",
	source : [["UA22XC", 18], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+",
	prereqeval : function(v) {
		return v.characterLevel >=20;
	},
	calcChanges : {
		hp : function (totalHD) {
			return [totalHD + 40, '\n + ' + totalHD + ' + 40 from Epic Boon of Fortitude (' + (totalHD + 40) + ')', true];
		},
	},
	description : "My Hit Point Maximum increases by 40. In addition, whenever I regain Hit Points, I regain additional Hit Points equal to my Constitution Modifier. I can regain these additional Hit Points no more than once per round.",
};

FeatsList["epic boon of luck ua22xc"] = {
	name : "Epic Boon of Luck (UA22XC)",
	source : [["UA22XC", 18], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.ranger || classes.known.rogue);
	},
	description : "Immediately after I roll a d20 for a d20 Test, I can roll a d10 and add the number rolled to the test. Once I use this benefit, I can’t use it again until I roll Initiative or finish a Short Rest or a Long Rest.",
};

FeatsList["epic boon of peerless aim ua22xc"] = {
	name : "Epic Boon of Peerless Aim (UA22XC)",
	source : [["UA22XC", 18], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Warrior Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.barbarian || classes.known.fighter || classes.known.monk || classes.known.ranger || classes.known.rogue);
	},
	description : "If I make a Ranged Attack against a target in range and miss, I can cause the attack to hit instead. Once I use this benefit, I can’t use it again until I roll Initiative.",
};

FeatsList["epic boon of skill proficiency ua22xc"] = {
	name : "Epic Boon of Skill Proficiency (UA22XC)",
	source : [["UA22XC", 19], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+",
	prereqeval : function(v) {
		return v.characterLevel >=20;
	},
	skills : [
		"Acrobatics",
		"Animal Handling",
		"Arcana",
		"Athletics",
		"Deception",
		"History",
		"Insight",
		"Intimidation",
		"Investigation",
		"Medicine",
		"Nature",
		"Perception",
		"Performance",
		"Persuasion",
		"Religion",
		"Sleight of Hand",
		"Stealth",
		"Survival",
	],
	skillstxt : "Proficiency with all skills",
	description : "I gain Proficiency in all Skills.",
};

FeatsList["epic boon of undetectability ua22xc"] = {
	name : "Epic Boon of Undetectability (UA22XC)",
	source : [["UA22XC", 19], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.ranger || classes.known.rogue);
	},
	description : "I can’t be seen or heard by any means — magical or nonmagical — while I are Hidden.",
};

FeatsList["epic boon of the unfettered ua22xc"] = {
	name : "Epic Boon of the Unfettered (UA22XC)",
	source : [["UA22XC", 19], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Warrior Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.barbarian || classes.known.fighter || classes.known.monk || classes.known.ranger || classes.known.rogue);
	},
	action : [
		["bonus action", "Disengage"],
	],
	description : "As a Bonus Action, I can take the Disengage Action, which also ends the Grappled and the Restrained Conditions on me.",
};