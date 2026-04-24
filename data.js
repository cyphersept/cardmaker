const decrees = `<p><strong>War Taxes:</strong><em>Taxes can be levied in times of emergency, but no matter how dire the need, the people will hate you for putting your need above their own.| Death and Taxes are both said to be certainties in life. Be sure the people don&rsquo;t think they can get out of giving you one by giving you the other. </em>Action: Lose 2 loyalists. Roll a d10. Gain half that much Treasury, rounding down.</p>
<p><strong>Writ of Arrest: </strong><em>By the Order of the Regent acting in the Name of the King, you are under arrest for treason against the Kingdom and her People | The Council has seen through your treachery and expects a full confession of your crimes by the morning. Let&rsquo;s discuss what that confession ought to say, shall we?</em> Select a character not in the Dungeon. They are moved to the Dungeon.</p>
<p><strong>Royal Pardon:</strong><em>To err is human, but mercy is divine. The King is Divine, and thus Regent is fit to see to the matter of mercy. | Even the vilest of blackguard can still serve their kingdom well, if given the chance. </em>Select a character in the Dungeon. Place them in a chosen Room.</p>
<p><strong>Order Foraging:</strong><em>A poacher kills a farmer&rsquo;s cow, and he is hanged. A soldier does the same, and he is commended for the good find. Justice is in the eyes of the authority. </em>| <em>An army lives off the land at the expense of the people living there.</em> Action: Lose 2 Loyalists. Roll a d10. 3+, gain 2 Supplies. 7+, gain 3 Supplies.</p>
<p><strong>Declare Festivus: </strong><em>War is no time to let a good feast go to waste</em>. <em>Just don&rsquo;t think about the cost.</em> Action: Lose 2 Supplies and 2 Treasury. Gain 5 Loyalists.</p>
<p><strong>Conscription:</strong><em>Too old and too young; if this is what we&rsquo;re down to, we have no chance.</em> Action: Lose 1 Loyalist and 1 Treasury. Gain 3 Armies. | <em>The issue with recalling veterans is they know too much to get away with giving them scraps. At least their recall won&rsquo;t raise too much concern.</em> Action: Lose 1 Treasury and 1 Supply. Gain 3 Armies.</p>
<p><strong>Rousing Speech:</strong><em>[Insert Speech Here]|I will not ask of you the so-called virtues of Duty, Honor, or Grace - only for your loyalty. Without Loyalty, a subject's virtues are nothing more than your enemy&rsquo;s boon. </em>| <em>[insert funny speech here] </em>Action: Roll a d10. 1-3 gain nothing. 4-6 gain 1 Loyalist. 7-9 gain 2 Loyalists. 10 gain 3 Loyalists.</p>
<p><strong>Abdication:</strong><em>There are concerns about the actions taken by this regency council. A change of formal leadership may go a long way towards placating the masses. </em>Remove the title of Regent from the Regent. Pass it to the highest available character in succession.</p>
<p><strong>Appoint Grand Inquisitor:</strong><em>It's an old office, one not filled in a century, but in these trying times, an independent arbiter held beyond reproach may be just what this kingdom needs.</em> Action: Place this card in front of another player. At any applicable time, they may discard this card to either choose the outcome of a Council Vote, or to reveal a character&rsquo;s hand of Skill Cards.</p>
<p><strong>Emergency Repairs:</strong><em>Rip out the nails and salvage the lumber, what good will sturdy thatching be if the Wall falls? |Normally I would disallow the addition of any material not fully vetted by a thorough inspection by the Guild, however under the circumstances I am willing to bypass regulations | It&rsquo;s more of a ramshackle pile of wreckage than a wall at this point, but it&rsquo;ll hold. </em>Spend 2 Supplies to heal the Wall HP by 1.</p>
<p><strong>Executive Authority:</strong><em>I speak for the King. To gainsay the King&rsquo;s word is treason. Obey or die. | I would never wish to circumvent the authority of the War Council, but you do remember I </em><b><em>am</em></b><em> the Regent, yes? | Surely, Chancellor, you understand that some opinions hold more sway than others in these times of crisis?</em> Play at any point during a Council Vote: Gain two additional Votes.</p>
<p><strong>Succession:</strong><em>I will not entrust our lives to a cowardly drunkard any longer. By the Order of the Regent, you are accused of dereliction of the duties of your office, and will surrender your Staff of Office to your apprentice immediately</em>. The position of Archmage is passed to the next in line of succession.</p>
<p><strong>Delegate Authority:</strong><em>The War Council serves an important function, but certain tasks require specialized approaches, free from their politicking | Give me three good men and your discretion, and I will ensure our problem will go away forever. </em>Play when a Crisis is revealed. Select up to three characters. Only they may contribute cards to resolve this crisis.&nbsp;</p>`;

const events = `<p><strong>Mercenaries: </strong><em><span style="font-weight: 400;">Their demands may be outrageous, but fighting men are always needed, and I worry what they might do if we reject them&hellip;</span></em><span style="font-weight: 400;"> Council Vote:</span></p>
<p><span style="font-weight: 400;">&ldquo;Hire Them&rdquo; </span><em><span style="font-weight: 400;">We always need more soldiers, expensive as they may be. </span></em><span style="font-weight: 400;">Lose 3 Treasury, add one Army to the Reserve.</span></p>
<p><span style="font-weight: 400;">&ldquo;Send them Off&rdquo; </span><em><span style="font-weight: 400;">Did they really think we would consider such outrageous demands?</span></em><span style="font-weight: 400;"> Skill check 11 Military + Intrigue. Pass, nothing happens. Fail, add 2 Bandits and 1 War Machine to PLAINS.</span></p>
<p>&nbsp;</p>
<p><strong>Plague Outbreak:</strong> <em><span style="font-weight: 400;">In all my years, I have never seen a set of symptoms this awful. The disease necrotizes the flesh until naught but bones, restless and devoid of reason, remain. It may already be spreading, and if we do not act quickly, we will not be able to stop it.</span></em></p>
<p><span style="font-weight: 400;">Difficulty 22 Leadership + Stewardship + Magic Skill Check.</span></p>
<p><span style="font-weight: 400;">Pass: Gain +3 Loyalists.&nbsp;</span></p>
<p><span style="font-weight: 400;">Partial Success 15+: -1 Loyalist, -2 Mana, -2 Treasury.</span></p>
<p><span style="font-weight: 400;">Failure: -3 Loyalists, -4 Mana, -3 Treasury. Activate the Mountains. Spawn 3 Skeleton Tokens and the Lich Monster in the Far Mountains.</span></p>
<p>&nbsp;</p>
<p><strong>Falsified Ledgers</strong><span sty&hellip;le="font-weight: 400;">: </span><em><span style="font-weight: 400;">Corruption is a dirty word, and more importantly a very serious crime. The king&rsquo;s larder is big enough, and if no one gets hurt, then it&rsquo;s not really a crime, is it?</span></em></p>
<p><span style="font-weight: 400;">Difficulty 5 Stewardship Skill Check. Pass, Nothing Happens. Fail, -2 Supplies and -1 Treasury.</span></p>
<p>&nbsp;</p>
<p><strong>Diplomatic Incident:</strong><span style="font-weight: 400;"></span><em><span style="font-weight: 400;">&hellip;And lo, the soldier drew his sword to strike at the asp which bit him, but as he did all the soldiers in both armies around him began to draw their swords, each fearing treachery at the sight of the other drawing arms, and a fierce battle began, all the more terrible for its accidental nature&hellip; </span></em><span style="font-weight: 400;">Revealer Choice:</span></p>
<p><span style="font-weight: 400;">&ldquo;Attempt to save the Peace Talks&rdquo; </span><em><span style="font-weight: 400;">This is our one chance at finding a peaceful solution to this Siege, or at least lessening the odds against us. We cannot fail. </span></em><span style="font-weight: 400;">Leadership + Intrigue 15 Skill Test:&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: The Regent chooses a Quadrant. Remove all Bandits and War Machines in that Quadrant.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: All characters Outside the Castle must discard their hands. Spawn 3 Bandits and 2 War Machines on the Far PLAINS, and 2 Bandits and 1 War Machine on the Near PLAINS. Activate the Plains.</span></p>
<p><span style="font-weight: 400;">&ldquo;Fight for your Life&rdquo; </span><em><span style="font-weight: 400;">A most perfidious trap-to arms, soldiers! </span></em><span style="font-weight: 400;">Military 8 Skill Test: Pass, Nothing happens. Fail: Wound the Revealer.</span></p>
<p>&nbsp;</p>
<p><strong>Disturbing Rumors:</strong> <em><span style="font-weight: 400;">Gossip travels quick, quicker than we can clamp down on it. Rumors are already abuzz about what happened to the Prince. If we don&rsquo;t do something quick, people are going to take action into their own hands.</span></em><span style="font-weight: 400;"> Leadership &amp; Intrigue 9 Skill Check. Pass, nothing happens. Fail, -2 Loyalists.</span></p>
<p>&nbsp;</p>
<p><strong>Council Deadlock:</strong> <em><span style="font-weight: 400;">The Council is often fractious and divided at the best of times. Even a relatively simple decree has its dissidents. Unusually, they seem rather committed to rejecting this ruling outright. The Regent must break the deadlock.</span></em><span style="font-weight: 400;"> Regent Choice.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Negotiate with the Reticent Councilors&rdquo; </span><em><span style="font-weight: 400;">The Council has a right to fully discuss any proposal before it to the complete satisfaction of all members. Perhaps a compromise is in order?</span></em><span style="font-weight: 400;"> Leadership 7 Test, Pass nothing happens. Fail -1 Loyalist, the Regent must discard all skill cards and Royal Decrees in their hand.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Stand Firm against their Demands&rdquo; </span><em><span style="font-weight: 400;">The Council oversteps, they must be reminded who is the Regent. Surely they will not cause problems over something as petty as this. </span></em><span style="font-weight: 400;">Increase the difficulty of the next Crisis by 5.&nbsp;</span></p>
<p>&nbsp;</p>
<p><strong>Bribery:</strong> <em><span style="font-weight: 400;">All these nasty inspections are rough for men of honest trade like me. The soldiers damage my cargo, and worse, seize parts of it for their own. Why not help a humble merchant out, and in turn, I offer a private donation to the kingdom&rsquo;s coffers&hellip;</span></em></p>
<p><span style="font-weight: 400;">Activate the Plains.</span></p>
<p><span style="font-weight: 400;">Revealer Choice:&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Waive off the Cargo Inspection&rdquo; </span><em><span style="font-weight: 400;">Who would I be to stand in the way of such a generous soul?</span></em><span style="font-weight: 400;"> Gain 5 Treasury. Revealer rolls a d10: 1-7 Take three Damage! Cards. 7+, nothing.</span></p>
<p><span style="font-weight: 400;">&ldquo;Refuse the Bribe&rdquo; Revealer rolls a d10: 1-3, Add three Bandits &amp; 1 Siege Tower to Near PLAINS. 3+, nothing.</span></p>
<p>&nbsp;</p>
<p><strong>Leverage:</strong> <em><span style="font-weight: 400;">Secrets that were meant to stay buried, debts and other malaise hidden quietly from polite society, or even the safety of our families-Sooner or later the enemy is going to find a weak spot in the Council, and once they do, even the most noble and honorable among us may find themselves working against the Kingdom.</span></em><span style="font-weight: 400;"> IF before Tier 2 ritual completion: Add 1 Traitor Card to undealt Loyalty Cards and shuffle. IF after Tier 2 ritual completion: Intrigue 9 Test. Pass, gain 1 Loyalist. Fail, lose 3 loyalists and one Army in reserves.</span></p>
<p>&nbsp;</p>
<p><strong>Saboteurs:</strong> <em><span style="font-weight: 400;">My Regent, I have reason to suspect that during the chaos of the recent attack the enemy may have planted saboteurs among our soldiers and citizens, lying in wait to destroy our defenses. With your permission I will root them out.</span></em><span style="font-weight: 400;"> Regent Choice:&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Purge the Military&rdquo; Leadership &amp; Military 12 Test:&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: Nothing.&nbsp;</span></p>
<p><span style="font-weight: 400;">Partial 7+: remove 2 Armies from Reserve, spawn 2 Bandits and a Siege Tower in Far PLAINS. Fail: Remove all Reserve Armies. Draw a Damaged! Card and resolve. Spawn 3 Bandits and 2 Siege Towers in Near PLAINS</span></p>
<p><span style="font-weight: 400;">&ldquo;Investigate the Peasants&rdquo; Intrigue &amp; Stewardship 12 Test:&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: Nothing.</span></p>
<p><span style="font-weight: 400;">Partial 7+: lose 3 Loyalists, draw 1 Damaged! Card.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: Lose 3 Loyalists, draw 2 Damaged! Cards. Spawn 5 Bandits in Far PLAINS.&nbsp;</span></p>
<p>&nbsp;</p>
<p><strong>Corrupt Guards:</strong> <em><span style="font-weight: 400;">As the siege has gone on, some of the castle guards have taken to accepting bribes and gifts in return for targeted crackdowns and other favors. Something must be done about the matter. </span></em><span style="font-weight: 400;">Regent Choice:&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Turn a Blind Eye&rdquo;</span><em><span style="font-weight: 400;"> After all, bribeable guards are great so long as you&rsquo;re the highest bidder. </span></em><span style="font-weight: 400;">Permanently lower the difficulty on the &ldquo;Accuse of Treason&rdquo; action by 2. Lose 1 Loyalist. Shuffle the &ldquo;Widespread Corruption&rdquo; Card into the Crisis Deck.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Purge the Ranks&rdquo; </span><em><span style="font-weight: 400;">Discipline and integrity must be maintained, no matter the cost.</span></em><span style="font-weight: 400;"> Leadership &amp; Military 13 Test.&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: Remove 1 Army from Reserves and gain 2 Loyalists and 1 Treasury.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: Remove 3 Armies from Reserve or the Battlefield and add 3 Bandits to front PLAINS.</span></p>
<p>&nbsp;</p>
<p><strong>Food Shortages:</strong> <em><span style="font-weight: 400;">No amount of logistics or planning, no matter how ingenious, can overcome the reality of feeding a few hundred mouths two times a day for months on end. </span></em><span style="font-weight: 400;">-1 Supplies.</span></p>
<p>&nbsp;</p>
<p><strong>Expenses: </strong><em><span style="font-weight: 400;">A kingdom is not an easy thing to upkeep. Even under austerity and with siege mentality, certain expenses cannot be deferred.</span></em><span style="font-weight: 400;"> -1 Treasury</span></p>
<p>&nbsp;</p>
<p><strong>Hearts Waver:</strong> <em><span style="font-weight: 400;">Even the most loyal of hearts will begin to waver after months of unease, confined within walls, as the enemy swells beyond them. </span></em><span style="font-weight: 400;">-1 Loyalist</span></p>
<p>&nbsp;</p>
<p><strong>Arcane Discharge:</strong> <em><span style="font-weight: 400;">Magic is a wild and chaotic thing. It cannot be safely stored forever. </span></em><span style="font-weight: 400;">-1 Mana</span></p>
<p>&nbsp;</p>
<p><strong>Prioritization:</strong> <em><span style="font-weight: 400;">When it comes time to redistribute resources like grain and iron, we must first consider where they will best be spent-and thus, who will have to go without for a while. </span></em><span style="font-weight: 400;">Council Vote.</span></p>
<p><span style="font-weight: 400;">&ldquo;Our Soldiers will Endure&rdquo; </span><em><span style="font-weight: 400;">They knew what they were getting into when they were conscripted. </span></em><span style="font-weight: 400;">Keep this card. Until the completion of the current Ritual Tier, Armies have -1 to their hit rolls.</span></p>
<p><span style="font-weight: 400;">&ldquo;The Peasants will Persist&rdquo; </span><em><span style="font-weight: 400;">The Peasant&rsquo;s lot is to suffer. They can go without for a while longer.</span></em><span style="font-weight: 400;"> Keep this card. Until the completion of the current Ritual Tier, characters draw 1 less skill card at the start of their turn.</span></p>
<p>&nbsp;</p>
<p><strong>Daring Raid:</strong> <em><span style="font-weight: 400;">War is not fought without risk. A chance to disrupt the enemy&rsquo;s supply chain and recoup some wealth is surely worth taking. &mdash; Easy to say when you&rsquo;re not the one going.</span></em><span style="font-weight: 400;"> Military 13 Test.&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: Gain 2 Supplies, 2 Treasury, &amp; 1 Loyalists.&nbsp;</span></p>
<p><span style="font-weight: 400;">Partial 7+: Gain 1 Supplies and 1 Treasury. Lose 1 Army in the field chosen by the Revealer.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: Destroy all Armies in the field. Lose 1 Loyalist.</span></p>
<p>&nbsp;</p>
<p><strong>Cod Season:</strong> <em><span style="font-weight: 400;">Some men, particularly foolhardy, had taken to sneaking out a postern door and fishing in a nearby lake. Against all the odds, the enemy hasn&rsquo;t seemed to notice, and better yet they claim there is a bounty of fish waiting to be claimed, if we&rsquo;ll allow them to.</span></em><span style="font-weight: 400;"> Council Vote:&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Punish them for their Stupidity&rdquo; </span><em><span style="font-weight: 400;">This is undoubtedly a trap, coupled with a lie to save their own skins.</span></em><span style="font-weight: 400;"> Lose 1 Loyalists.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Permit the Fishing Expedition&rdquo; </span><em><span style="font-weight: 400;">This is undoubtedly a trap, but we can&rsquo;t pass up a chance for fresh food</span></em><span style="font-weight: 400;">.&nbsp; Revealer rolls a d10. Gain half that many Supplies rounding down. Add 2 Bandits &amp; 1 War Machine to the Near Woods.&nbsp;</span></p>
<p>&nbsp;</p>
<p><strong>Storehouse Fire:</strong> <em><span style="font-weight: 400;">Whether by accident or malice, the supply store burns. We must act swiftly if we&rsquo;re going to salvage anything-though perhaps this is simply a distraction for some mischief elsewhere. </span></em><span style="font-weight: 400;">Revealer Choice:</span></p>
<p><span style="font-weight: 400;">&ldquo;Focus on the Fire&rdquo; </span><em><span style="font-weight: 400;">We must act immediately to save our supplies and prevent the fire from spreading.</span></em><span style="font-weight: 400;"> Stewardship &amp; Magic 8 Test. Pass, All characters discard 1 skill card. Fail, lose 2 Supplies, draw one Damage! card, and all characters discard all skill cards.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Focus on Sabotage&rdquo; </span><em><span style="font-weight: 400;">What&rsquo;s really going on here? Surely whatever mischief is being wrought will do greater harm than a mere fire</span></em><span style="font-weight: 400;">. Intrigue &amp; Military 8 Test. Pass, Draw 1 Damage! card. Fail, Lose 2 supplies, draw 2 Damage! Cards, and all characters discard 1 skill card.</span></p>
<p>&nbsp;</p>
<p><strong>Private Credit:</strong> <em><span style="font-weight: 400;">It&rsquo;s no secret that our coffers are all but empty, and it has a few of our domestic lenders thinking about their own needs ahead of the Kingdom. They must be reassured their debts will be repaid&hellip; eventually.</span></em><span style="font-weight: 400;"> Leadership + Stewardship 8 Test.&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: Nothing.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: -2 Treasury.</span></p>
<p>&nbsp;</p>
<p><strong>Brazen Assault: </strong><em>The enemy has sent a crack team of adventurers to storm our walls. Repel them, lest they open the gate!</em><span style="font-weight: 400;"> Military 5 Test. Activate All Near.</span></p>
<p><span style="font-weight: 400;">Pass: Nothing</span></p>
<p><span style="font-weight: 400;">Fail: Suffer 1 Damage! Gain an additional card of Damage! for every 2 degrees this test was failed by. (So if you end up with 1 total score after adding and subtracting all card values, you suffer 3 Damage!, for example).</span></p>
<p>&nbsp;</p>
<p><strong>Dissidents and Radicals:</strong> <em><span style="font-weight: 400;">As the siege drags on, and the War Council solidifies its role, its relatively meritocratic nature inspires radical thoughts among certain dissidents. Their dangerous thoughts could compromise the integrity of our defense.</span></em><span style="font-weight: 400;"> Leadership 6 Test.</span></p>
<p><span style="font-weight: 400;">Pass: Nothing.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Fail: -2 Loyalists.</span></p>
<p>&nbsp;</p>
<p><strong>Plots in Plots: </strong><em><span style="font-weight: 400;">Yesterday I wined with the Merchant and discussed a recent vacation taken before the Siege, during which conversation fifteen different secret passphrases and veiled references to ongoing plots and secret societies were mentioned. Today I discover which tidbits were sincere coincidences, and which were cunning allusions. Tomorrow I figure out why this warranted my attention. </span></em><span style="font-weight: 400;">Intrigue 6 Test.</span></p>
<p><span style="font-weight: 400;">Pass: Nothing</span></p>
<p><span style="font-weight: 400;">Fail: -2 Treasury.</span></p>
<p>&nbsp;</p>
<p><strong>Thaumic Parasites</strong><span style="font-weight: 400;">: </span><em><span style="font-weight: 400;">The great confluence of mana being channeled in our great Ritual appears to be attracting some form of anima wisps that feed off of the magical residue present in our precious gem stores. Banish them, as we would any other pest.</span></em><span style="font-weight: 400;"> Magic 6 Test.</span></p>
<p><span style="font-weight: 400;">Pass: Nothing</span></p>
<p><span style="font-weight: 400;">Fail: -2 Mana.</span></p>
<p>&nbsp;</p>
<p><strong>Rationing:</strong> <em><span style="font-weight: 400;">The numbers are clear, my lord: if we&rsquo;re going to survive under siege for weeks or even months until this Ritual of ours can finish, we&rsquo;re all going to need to cut back on our use of even simple things like candle wax, parchment, and firewood. </span></em><span style="font-weight: 400;">Stewardship 6 Test.</span></p>
<p><span style="font-weight: 400;">Pass: Nothing.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: Lose 2 Supplies.</span></p>
<p>&nbsp;</p>
<p><strong>Philosophical Planning:</strong> <em><span style="font-weight: 400;">A new thought has seized the Council today, and it has spurned a fearsome debate, as each side seeks to implement their vision. Is it better to save and waste away in hopes of being alive to reach a better tomorrow, or to seize the day and throw everything for one singular gambit? </span></em><span style="font-weight: 400;">Activate all Far Quadrants. Council Vote.</span></p>
<p><span style="font-weight: 400;">&ldquo;Indulgence&rdquo;</span> <span style="font-weight: 400;">- </span><em><span style="font-weight: 400;">In a hundred years we may all be dead, but here and now we are alive!</span></em><span style="font-weight: 400;"> The Regent chooses a character. They draw cards until their hand is full.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Scarcity&rdquo;</span> <span style="font-weight: 400;">- </span><em><span style="font-weight: 400;">Better to live forever the beggar than one day a king</span></em><span style="font-weight: 400;">. All characters discard one card from their hand. Gain one of each Resource.</span></p>
<p>&nbsp;</p>
<p><strong>Rite of Alacrity:</strong> <em><span style="font-weight: 400;">My lord, I have had the most wonderful idea for a new spell which will greatly aid in completing day to day tasks through invigoration. If you&rsquo;d just be willing to lend a small sum and permit some discretion in my use here, then I have no doubt we will see the benefits. </span></em><span style="font-weight: 400;">Regent Choice.</span></p>
<p><span style="font-weight: 400;">&ldquo;Fund The Experiment&rdquo; - </span><em><span style="font-weight: 400;">You&rsquo;ll have your funding, but we expect tangible results for someone </span></em><b><em>other</em></b><em><span style="font-weight: 400;"> than you for once. </span></em><span style="font-weight: 400;">Magic 7 Test.</span></p>
<p><span style="font-weight: 400;">Pass: The Archmage chooses a character other than themselves. That character draws an additional card at the start of their turn until the completion of the current ritual tier. -1 Treasury &amp; -2 Mana.</span></p>
<p><span style="font-weight: 400;">Fail: -1 Treasury &amp; -2 Mana.</span></p>
<p><span style="font-weight: 400;">&ldquo;We Can&rsquo;t Afford To&rdquo; </span><em><span style="font-weight: 400;">Why don&rsquo;t you stick to more proven rites? </span></em><span style="font-weight: 400;">Nothing Happens.</span></p>
<p>&nbsp;</p>
<p><strong>Infiltrator:</strong> <em><span style="font-weight: 400;">Stumbling into an obvious enemy mid-mischief on one&rsquo;s way to the privy is either a blessing or a curse, depending on how you look at it.</span></em><span style="font-weight: 400;"> Revealer Choice:&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Raise the Alarm&rdquo; </span><em><span style="font-weight: 400;">The Castle Guard can be here in one minute-just gotta stall until then</span></em><span style="font-weight: 400;">. The Revealer discards all skill cards in their hand.</span></p>
<p><span style="font-weight: 400;">&ldquo;Slay the Saboteur&rdquo; </span><em><span style="font-weight: 400;">No time to call for backup-it&rsquo;s hero time.</span></em><span style="font-weight: 400;"> Military 6 Check. Pass, nothing happens. Fail, Wound the Revealer. Draw a Damage! Card.</span></p>
<p>&nbsp;</p>
<p><strong>Consolidation:</strong> <em><span style="font-weight: 400;">Time and effort are two resources always in short supply in the Castle. Whose interests should we focus the bulk of the assistance towards this day? </span></em><span style="font-weight: 400;">Activate the Beach. Council Vote:</span></p>
<p><span style="font-weight: 400;">&ldquo;The Crown&rsquo;s Needs&rdquo; </span><em><span style="font-weight: 400;">Our leadership&rsquo;s interests are paramount to our safety. We must focus on aiding them.</span></em><span style="font-weight: 400;"> The Regent and Archmage each draw 2 Skill Cards. All other characters discard 1 skill card from their hand.</span></p>
<p><span style="font-weight: 400;">&ldquo;The Council&rsquo;s Needs&rdquo; </span><em><span style="font-weight: 400;">Seeing to the private needs of the Council Members will ensure they are in the best condition to guide us. </span></em><span style="font-weight: 400;">The Regent and Archmage each discard 2 Skill Cards from their hands. All other characters draw 1 Skill Card.&nbsp;</span></p>
<p>&nbsp;</p>
<p><strong>Wild Accusations:</strong> <em><span style="font-weight: 400;">The people are scared, and fear brings out the worst in people. Already they&rsquo;re demanding blood, a scapegoat to be imprisoned over a mere rumor leaked from the Council Chambers. What will happen if we give in to this madness? </span></em><span style="font-weight: 400;">Council Vote:</span></p>
<p><span style="font-weight: 400;">&ldquo;Appease the Masses&rdquo; </span><em><span style="font-weight: 400;">Perhaps there is truth in the rumor. Or a convenient excuse to waylay a rival.</span></em><span style="font-weight: 400;"> Throw the Crisis Revealer into the Dungeon. Add the Crisis Card &ldquo;Mob Justice&rdquo; to the Crisis Deck and shuffle.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Pay Off the Rabble-Rousers&rdquo; </span><em><span style="font-weight: 400;">We can&rsquo;t act against the mob without causing a riot, but paying off a few particularly loud voices will quiet things down.</span></em><span style="font-weight: 400;"> Spend 2 Treasury.</span></p>
<p>&nbsp;</p>
<p><strong>Mob Justice:</strong> <em><span style="font-weight: 400;">The mob has been roused to suspicion seemingly confirmed by us arresting the scapegoat on the thinnest of hearsay for evidence. Now they see treason behind every corner, and accuse even trusted Councilors of putting their own interests above the kingdom.</span></em><span style="font-weight: 400;"> Council Vote:</span></p>
<p><span style="font-weight: 400;">&ldquo;The Integrity Committee&rdquo; </span><em><span style="font-weight: 400;">The Council quickly voted for the formation of a new committee charged with investigating the crimes of the Regent and Archmage to distract the mob</span></em><span style="font-weight: 400;">. Imprison the Regent and Archmage. Lose 2 Loyalists.</span></p>
<p><span style="font-weight: 400;">&ldquo;Purge the Council&rdquo; </span><em><span style="font-weight: 400;">The Council is, of course, corrupt to the core as the peasants are so fond of pointing out. Imprisoning a few errant members ought to keep them off our backs.</span></em><span style="font-weight: 400;"> All non-Regent characters roll a d10. All but the one who rolls the highest (and the Regent) are thrown into the Dungeon. Ties are broken in accordance with the Line of Succession.</span></p>
<p><span style="font-weight: 400;">&ldquo;Drastic Measures&rdquo; </span><em><span style="font-weight: 400;">This must end here, and now.</span></em><span style="font-weight: 400;"> Leadership + Military + Magic 20 Test. Pass, Gain 1 Loyalists. Partial 14+ lose 1 Loyalist and draw a Damage! Card. Fail: Imprison all characters. Draw 2 Damage! Cards. Lose 3 Loyalists.</span></p>
<p>&nbsp;</p>
<p><strong>Ritual of Veracity:</strong> <em><span style="font-weight: 400;">With a careful combination of verisimilitude, vino merus, and vinegar, I have concocted a concoction that will allow us to detect a creature&rsquo;s true form and allegiance, though we&rsquo;ll only have one shot at it because I drank the rest.</span></em><span style="font-weight: 400;"> Intrigue + Magic 10 Skill Test&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: The Archmage may look at any one character&rsquo;s loyalty card(s). The Rule of Discretion still applies.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: -2 Loyalists.</span></p>
<p>&nbsp;</p>
<p><strong>Defection:</strong> <em><span style="font-weight: 400;">The mood in the barracks is grim after the latest assault. While there are always grumblings of dissent, topics have recently turned to full blown talks of sedition and treason. We should make examples of the most outspoken.</span></em><span style="font-weight: 400;"> Leadership + Military 9 Test.</span></p>
<p><span style="font-weight: 400;">Pass: Nothing.</span></p>
<p><span style="font-weight: 400;">Partial 6+: -1 Loyalist</span></p>
<p><span style="font-weight: 400;">Fail: -2 Loyalists. Lose 1 Reserve Army. Add 2 Bandits to the Near Woods.</span></p>
<p>&nbsp;</p>
<p><strong>Debt Collectors:</strong> <em><span style="font-weight: 400;">My lord, an Emissary appeared in front of our Gates this morning asking for an audience. Most incredulously, he comes not from any of the Besiegers, but instead a third party: a bank aligned to the Barduck Kingdoms we owe a great debt to. What shall we do? </span></em><span style="font-weight: 400;">Regent Choice:</span></p>
<p><span style="font-weight: 400;">&ldquo;We Always Pay Our Debts&rdquo; </span><em><span style="font-weight: 400;">We are no fairweather friend who abandons our dues the moment times become hard. We will pay our debts.</span></em><span style="font-weight: 400;"> -3 Treasury.</span></p>
<p><span style="font-weight: 400;">&ldquo;What about a Deferment?&rdquo; </span><em><span style="font-weight: 400;">We are actively under Siege, as you undoubtedly noticed on your ride here, Emissary. Perhaps we could postpone this discussion to a later date?</span></em><span style="font-weight: 400;"> Leadership &amp; Stewardship 15 Test.</span></p>
<p><span style="font-weight: 400;">Pass: Gain 2 Treasury</span></p>
<p><span style="font-weight: 400;">Partial 10+: Nothing.</span></p>
<p><span style="font-weight: 400;">Fail: Spawn 5 Bandits, 2 War Machines, and a Siege Tower in the Far Mountains. Activate the Mountains.</span></p>
<p>&nbsp;</p>
<p><strong>Breakthrough:</strong> <em><span style="font-weight: 400;">The enemy snuck through our lines and has sent men to scale the Wall. We must repel them before they can wreak havoc on our defenses!</span></em><span style="font-weight: 400;"> Activate all Near Sections. Military 7 Test.&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: Nothing.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: Draw three Damaged! Cards and resolve them.&nbsp;</span></p>
<p>&nbsp;</p>
<p><strong>Starvation:</strong> <em><span style="font-weight: 400;">Supplies can only be stretched so thin, my lord. At the end of the day, some people are simply going to have to go without. </span></em><span style="font-weight: 400;">Regent Choice:&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Distribute Food from the Emergency Larder&rdquo; </span><em><span style="font-weight: 400;">We&rsquo;re not going to have reserves much longer, if we have to keep doing this. </span></em><span style="font-weight: 400;">Lose 3 Supplies, Gain 1 Loyalists.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Stretch them thinner&rdquo; </span><em><span style="font-weight: 400;">We will all have to endure a little hunger. </span></em><span style="font-weight: 400;">Stewardship 10 Test. Pass, nothing. Fail, lose 3 Loyalists.</span></p>
<p>&nbsp;</p>
<p><strong>Council Reform</strong><span style="font-weight: 400;"></span><em><span style="font-weight: 400;">The Regency Council has done well enough under the circumstances in safeguarding the realm for the King&rsquo;s return, but if we wish to survive the dangers before us, we must see to an end of this politicking and chaos that rules the Central Keep. We can ill afford to waffle as we have much longer. </span></em><span style="font-weight: 400;">Council Vote:&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;We must Ensure Equality among the Council&rdquo; Whenever the &ldquo;Elect a New Regent&rdquo; Action is taken, rather than taking a skill test, all characters not in the Dungeon get a single vote for or against the targeted character becoming Regent, majority winning and ties failing. When a Regent Choice is made, if all other Defenders agree, then the Council may change the decision to a different outcome than the Regent picked.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;We must Centralize Power further!&rdquo; Whenever a Council Vote is decided, the Regent may discard one Royal Decree to veto the Vote, resolving the second highest outcome instead.&nbsp;</span></p>
<p>&nbsp;</p>
<p><strong>Smugglers: </strong><em><span style="font-weight: 400;">Hard-eyed, cunning men and women snuck through a sewer grate last night. Luckily for us all, instead of bringing fire and steel, they brought wares to trade-though not for cheap, considering the trouble they went through to bring it to us.</span></em><span style="font-weight: 400;"> Regent Choice:</span></p>
<p><span style="font-weight: 400;">&nbsp;&ldquo;Food, Fodder, Wood, and Wine-all are in sore need&rdquo; -3 Treasury +2 Supplies or -6 Treasury +4 Supplies.</span></p>
<p><span style="font-weight: 400;">&ldquo;Precious gemstones, reagents, and shiny baubles for our Spellcasters&rdquo; -3 Treasury +2 Mana or -6 Treasury +4 Mana.&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;We have no need of your services&rdquo; Nothing.</span></p>
<p>&nbsp;</p>
<p><strong>Vote of No Confidence/Protests:</strong> <em><span style="font-weight: 400;">yada yada people mad, administration bad, widespread questions of capabilities.</span></em><span style="font-weight: 400;"> Council Vote: &ldquo;We Must Quell This Dissident Talk&rdquo; Leadership 10 Test on Pass gain 2 Loyalists, on Fail lose 2 Loyalists and pass the position of Regent and Archmage to their respective next in lines. | &ldquo;A change in leadership will assure the masses'' Pass the title of Regent and Archmage to their respective next in line. Gain 1 Loyalists.</span></p>
<p>&nbsp;</p>
<p><strong>An Ounce of Preparation: </strong><em><span style="font-weight: 400;">Given access to the right resources, the only reason failure should ever occur is a lack of foresight, which I aim to correct.</span></em><span style="font-weight: 400;"> Stewardship &amp; Magic 12 Test</span></p>
<p><span style="font-weight: 400;">Pass: Put this card in front of the Archmage. When a Crisis is revealed, they may discard this card to halve the difficulty of the Crisis.</span></p>
<p><span style="font-weight: 400;">Fail: The Archmage discards all skill cards in their hand. Lose 1 Supplies.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Auspicious Signs - Magic test 15&nbsp;</span></p>
<p><span style="font-weight: 400;">Pass: Gain +5 Mana</span></p>
<p><span style="font-weight: 400;">Partial 12+: Gain 3 Mana</span></p>
<p><span style="font-weight: 400;">Partial 7+: Gain 1 Mana</span></p>
<p><span style="font-weight: 400;">Fail: Nothing.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">The Speech: Leadership 12 Test</span></p>
<p><span style="font-weight: 400;">Pass: +3 Loyalists</span></p>
<p><span style="font-weight: 400;">Partial 7+: +1 Loyalists</span></p>
<p><span style="font-weight: 400;">Fail: -1 Loyalists</span></p>
<p>&nbsp;</p>
<p><strong>Patriotism: </strong><em><span style="font-weight: 400;">Patriotism is a fickle thing to manage. A surge of true believers fighting for your cause is well and good, but fail to exploit them and their passion turns to disdain and rage. </span></em><span style="font-weight: 400;">Leadership 15</span></p>
<p><span style="font-weight: 400;">Pass: Gain 5 Reserve Armies</span></p>
<p><span style="font-weight: 400;">Partial 10+: Gain 3 Reserve Armies</span></p>
<p><span style="font-weight: 400;">Partial 5+: Gain 1 Reserve Army</span></p>
<p><span style="font-weight: 400;">Fail: Lose 3 Loyalists</span></p>
<p>&nbsp;</p>
<p><strong>Army Reform: </strong><em><span style="font-weight: 400;">A group of veterans-professionals from the start of the war-came before the Council today with a list of requests they claimed represented the will of the Army. They raised concerns such as being conscripted with deferred payments, many of which would never be paid out to their families if they died in battle, while being kept in line by corporal punishment. Obviously we can&rsquo;t give into their demands, but perhaps we could offer some token reforms? </span></em><span style="font-weight: 400;">Council Vote:</span></p>
<p><span style="font-weight: 400;">&ldquo;Let&rsquo;s see about Widow Benefits&rdquo; </span><em><span style="font-weight: 400;">These soldiers fight not just for their King and his Council, but for their families most of all. We will win their loyalty and devotion if they know we&rsquo;ll take care of their loved ones.</span></em><span style="font-weight: 400;"> Put this card aside until the completion of the current Ritual Tier. Whenever an Army is destroyed, lose 1 Supply or Treasury, Regent&rsquo;s Choice.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">&ldquo;Distract them with Higher Wages&rdquo; </span><em><span style="font-weight: 400;">At the end of the day, our Army is one of a mercenary temperament. The sum of all things they defend for pay, and that&rsquo;s just fine for today.</span></em><span style="font-weight: 400;"> Put this card aside until the completion of the current Ritual Tier. Whenever the &lsquo;Muster a New Army&rsquo; action is successful, lose 1 Treasury.</span></p>
<p><span style="font-weight: 400;">&ldquo;Outlaw Hated Practices&rdquo; </span><em><span style="font-weight: 400;">Putting an end to the most divisive and universally hated punishments will diffuse most of the anger.</span></em><span style="font-weight: 400;"> All characters with a Military Skillset discard all cards in their hands.</span></p>
<p>&nbsp;</p>
<p><strong>Harvest Festival: </strong><em><span style="font-weight: 400;">The annual harvest festival has been an unbroken tradition for a century since its formal adoption by the crown. We are stretched thin, but we must find some goods squirreled away we can afford to sacrifice, or else the peasantry will say the land is cursed and reject us for failing to make the proper offerings. </span></em><span style="font-weight: 400;">Stewardship 5 Test.</span></p>
<p><span style="font-weight: 400;">Pass: -1 Supplies +1 Loyalists.</span></p>
<p><span style="font-weight: 400;">Fail: -2 Loyalists.</span></p>
<p>&nbsp;</p>
<p><strong>Ritual of Fertility:</strong> <em><span style="font-weight: 400;">The Ritual of Fertility is largely held to be a symbolic affair, true, but the rote motions actually involve invocation of local nature spirits, begging them for good harvest and weather for the following year. Surely you understand we cannot postpone this most sacred event, Regent? </span></em><span style="font-weight: 400;">Regent Choice.</span></p>
<p><span style="font-weight: 400;">&ldquo;Offer a Great Sacrifice&rdquo; </span><em><span style="font-weight: 400;">Good things come to those who wait. </span></em><span style="font-weight: 400;">-2 Mana -2 Supplies. Shuffle the card &ldquo;Bountiful Blessings&rdquo; into the deck.</span></p>
<p><span style="font-weight: 400;">&ldquo;Go through the Motions&rdquo; </span><em><span style="font-weight: 400;">If you insist, Archmage, but keep it short and cheap.</span></em><span style="font-weight: 400;"> -1 Supplies -1 Mana.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;We Do Not Beg&rdquo; </span><em><span style="font-weight: 400;">As I understand from the Scouting reports, those selfsame spirits are at the southern wall.</span></em><span style="font-weight: 400;"> Activate the Wood Quadrant.</span></p>
<p>&nbsp;</p>
<p><strong>Bountiful Blessings:</strong> <em><span style="font-weight: 400;">I am pleased to report our grand sacrifice during the Fertility Ritual months ago has borne fruit, literally: Gemberries have sprouted from the scullery floor, awash with phantasmal lights, more than enough to see us through the coming month. </span></em><span style="font-weight: 400;">Gain 4 Supplies and 4 Mana.</span></p>
<p>&nbsp;</p>
<p><strong>Black Market:</strong> <em><span style="font-weight: 400;">Of course a Black Market is an issue! Even ignoring how they sidestep market fees, reduce the taxable wealth in circulation, and undermine Council Authority, these underground markets don&rsquo;t just make goods appear out of thin air-by some means they&rsquo;re stealing from our stores for private gain. </span></em><span style="font-weight: 400;">Stewardship + Intrigue 8 Test.</span></p>
<p><span style="font-weight: 400;">Pass: -1 Loyalists.&nbsp;</span></p>
<p><span style="font-weight: 400;">Fail: -2 Supplies, -2 Treasury.</span></p>
<p>&nbsp;</p>
<p><strong>Payday</strong><span style="font-weight: 400;">: </span><em><span style="font-weight: 400;">While we managed to forestall payments with promises as long as possible, our soldiers in the field have had enough and are demanding to be paid immediately. </span></em><span style="font-weight: 400;">Council Vote.</span></p>
<p><span style="font-weight: 400;">&ldquo;Give into their Demands&rdquo; </span><em><span style="font-weight: 400;">We have no choice. We cannot risk a mass insurrection in the ranks in the middle of battle. </span></em><span style="font-weight: 400;">-1 Treasury for every Army sallied forth.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Oaths and Threats&rdquo; </span><em><span style="font-weight: 400;">Whether with inspirational speeches or deadly punishments, measures must be taken to keep the men in line.</span></em><span style="font-weight: 400;"> Leadership + Military 13 Test.</span></p>
<p><span style="font-weight: 400;">Pass: Nothing Happens.</span></p>
<p><span style="font-weight: 400;">Fail: Remove all sallied forth Armies. For each Army removed, place a Bandit. Wound all sallied forth Characters. For each Character Wounded, place a War Machine.</span></p>
<p>&nbsp;</p>
<p><strong>Supply Lines</strong><span style="font-weight: 400;">: </span><em><span style="font-weight: 400;">Recent attacks on our baggage trains have resulted in our soldiers in the field running dangerously low on essentials such as food and arrows. We&rsquo;ll need to send out special resupply shipments, or else risk neutering our forces.</span></em><span style="font-weight: 400;"> Council Vote.&nbsp;</span></p>
<p><span style="font-weight: 400;">&ldquo;Prepare the Wagons&rdquo; </span><em><span style="font-weight: 400;">Keeping our Armies in peak condition must be our highest priority.</span></em><span style="font-weight: 400;"> -1 Supplies for every Army sallied forth.</span></p>
<p><span style="font-weight: 400;">&ldquo;Can&rsquo;t they live off the Land?&rdquo; </span><em><span style="font-weight: 400;">Maybe this will teach them to keep a closer watch on their stores. </span></em><span style="font-weight: 400;">Keep this card. All Armies have -1 to their hit rolls until the end of their Ritual Tier.</span></p>
<p>&nbsp;</p>
<p><strong>Contaminated Well:</strong><span style="font-weight: 400;"> Stewardship 5 Test</span></p>
<p><span style="font-weight: 400;">Pass: Nothing</span></p>
<p><span style="font-weight: 400;">Fail -1 Supplies &amp; -1 Loyalists.</span></p>
<p><br /><br /></p>
<p><strong>Two By Sea:</strong><span style="font-weight: 400;"> Activate Beach Quadrant. Then: Add 2 War Machines and Two Bandits to the Far BEACH.</span></p>
<p>&nbsp;</p>
<p><strong>Hrodvigar Invasion:</strong><span style="font-weight: 400;"> Activate the Beach. Then add 1 War Machine, 2 Siege Towers, and 5 Bandits to the Far Beach.</span></p>
<p>&nbsp;</p>
<p><strong>Pirate Raid:</strong> <em><span style="font-weight: 400;">There is no ship no infamous, no crew more feared, than that of the infamous Limencello. A fierce band of buccaneers and pirates, they sail the seven seas in search of plunder and booty. Rather distressingly, they seem to be heading right towards us.&nbsp;</span></em></p>
<p><span style="font-weight: 400;">&nbsp;Add </span><em><span style="font-weight: 400;">The Limicello</span></em><span style="font-weight: 400;"> Monster &amp; 2 Bandits to Far BEACH. Add 3 Bandits to Near BEACH. Then: Activate the Beach Quadrant.</span></p>
<p>&nbsp;</p>
<p><strong>Insurgency:</strong><span style="font-weight: 400;"> Activate the Woods, Mountains, and Plains. Then, Add 3 Bandits &amp; 1 War Machine to the Far WOODS. Add 2 Bandits to the Far Mountains. Add 1 War Machine to the Far PLAINS.</span></p>`;

const skills = `<p>Leadership - Yellow</p>
<p>1&amp;2: Council Command - Play on a character&rsquo;s turn. They may immediately use a room action. <em>By the order of the Regency Council, you will see to this duty at once.</em></p>
<p>3&amp;4: Emergency Mandate - Play after a Crisis has been revealed. Lower the difficulty (and pass thresholds) of this Crisis by 3. A Crisis&rsquo;s difficulty cannot be lowered below 1. <em>NOTICE - The Council has decreed a State of Emergency. Do not be alarmed.</em></p>
<p>5: Political Maneuvering - Play when a Council Vote or Regent Choice is made: Nullify that decision. Choose a different option. <em>No one will remember what arguments were made, or what votes were tallied. All they will know is your choice. </em>| <em>Some write history in ink. The Great write history in blood.</em>| <em>How intoxicating it must be, to shape the Will of a Nation and the Destiny of a People to the thunderous roar of applause.&nbsp;</em></p>
<p>Intrigue - Purple</p>
<p>1&amp;2: Diplomatic Overtures - Play when an &ldquo;Activate Attackers&rdquo; symbol is shown. Roll a die. On a 8+, a chosen section that would activate this turn doesn&rsquo;t activate. [Still maybe needs to just be something else]</p>
<p>1&amp;2: Haste - Play on a character&rsquo;s turn: they may make an additional movement this turn. <em>So much of life is about being in the right place at the right time.</em></p>
<p>3&amp;4: Audit - Action: Look at a character&rsquo;s hand of skill cards. Normal rules of discretion still apply. <em>You have nothing to fear if your story matches the records.</em></p>
<p>5: Spy Network - Play after a Crisis has been revealed, but before skill cards are played. All cards, including those from the Chance Deck, are played face up during this Crisis. <em>Knowledge is a power as deadly as any weapon. </em>| <em>Weeks of preparation, countless hours of toil and expense, all for one glorious moment of control.</em> | <em>Ye shall know the truth, and the truth will set you free.</em></p>
<p><br /><br /></p>
<p>Stewardship - Green</p>
<p>1&amp;2: Repair Fortifications - Action: Repair your current room <em>or </em>repair the Wall&rsquo;s HP by one if you are on the Ramparts.</p>
<p>3&amp;4: Gather Resources - Play on a character&rsquo;s turn: They Draw Two Cards.</p>
<p>5: Consolidate Assets - Action: Exchange 2 of any Resource (Treasury, Loyalists, Mana, Supplies) for 2 of any other Resource. You cannot reduce a Resource to 0 as a result of this. <em>X</em> | <em>X</em> | <em>X</em></p>
<p><br /><br /></p>
<p>Military - Red</p>
<p>1&amp;2: Prowess - Play when a die is rolled: Add +1 or -1 to the result of a die&rsquo;s roll. <em>Luck has no place on the battlefield. Not for you, anyways.</em></p>
<p>3&amp;4: Scouting Expedition - Action: Roll a d10. On a 6+, look at the next two Crisis Cards and place one on the top and one on the bottom of the Crisis Deck. <em>Only a fool marches blindly towards the horizon.&nbsp;</em></p>
<p>5: Brilliant Tactics - Play on a character&rsquo;s turn: They may take another turn after their current turn. Do not proceed to the &ldquo;Draw Crisis&rdquo; step until all of a character&rsquo;s turns have been taken. <em>Strike swiftly, and then do not relent in your blows until the foe has been utterly destroyed.</em> | <em>I will fight on forever.</em> | <em>Victory is achieved not by the strongest, nor the smartest, nor the meanest, but by the man who refuses to surrender.</em></p>
<p><br /><br /></p>
<p>Magic - Blue</p>
<p>1&amp;2: Haste - Play on a character&rsquo;s turn: they may make an additional movement this turn.</p>
<p>1&amp;2: Cantrip - All Magic 1&amp;2 Cards are an insular version of the other faction&rsquo;s card:&nbsp;</p>
<p>*Leadership - &lsquo;Mirror Image&rsquo; Play on your turn. Immediately make a Room Action.</p>
<p>*Intrigue - &lsquo;Celerity&rsquo; - Play on your turn. You may make an additional movement this turn.</p>
<p>*Stewardship - &lsquo;Mending&rsquo; - Action: Repair your Current Room. Cannot be used to Repair the Wall.</p>
<p>*Military - &lsquo;Nudge&rsquo; - Play when you roll a die: Add +1 or -1 to the result.</p>
<p>3&amp;4: Channel Reserves - Action: Roll a d10. 1-5: Gain Nothing. 6-7: Gain 1 Mana. 8-9: Gain 2 Mana. 10: Gain 3 Mana. <em>We&rsquo;re going to need every last mote of power we can get.</em></p>
<p>5: Flexible Casting - Play when a Skill Test occurs: Choose a Skill Type. All Cards of this type are treated as positive/beneficial for this Skill Test. <em>X</em> | <em>X</em> | <em>X</em>.</p>`;

const monsters = `<p><strong>Siege Tower </strong>- <em>The lumbering siege tower, crewed by a motley lot of invading bandits, is of little threat of its own, but permits the treasonous masses direct access to the Wall while shielding those hiding beneath its hatched shell, whereupon their impotent shouts and curses become a far more deadly threat.</em></p>
<p>2HP | 1 Dice | 7+</p>
<p><strong>Spawn</strong>: N/A</p>
<p><strong>Activation</strong>: Moves normally, can attack the castle.</p>
<p><strong>Monster Ability</strong>: <em>Siege Engine </em>- Allows Bandits in the same &lsquo;Near&rsquo; Section as it to attack the Castle.</p>
<p><strong>Monster Ability</strong>: <em>Barricades</em> - The Siege Tower automatically cancels 1 hit made against Besiegers in its Section, though will not cancel the last/only Attack made against them.</p>
<p><strong>Loot</strong>: The first time a Siege Tower is destroyed, the slayer in the same Section gains the item <strong><em>Fortified Thatching</em></strong>: <em>When a Room you are would be Damaged, discard this item to negate the Damage.</em></p>
<p><br /><br /></p>
<p><strong>The Lich </strong>- <em>Bringer of the plague of undeath roving through the lands, an opportunistic vulture who thrives off the misery and chaos of war, exasperating the strife like an infection in a wound. They are more than content to patiently await their enemies' downfalls - do not hesitate to destroy this creature, or else find yourself awash in bloody history.</em></p>
<p>1HP| 2 Dice | 9+</p>
<p><strong>Spawn</strong>: Far Mountain (Woods)</p>
<p><strong>Activation</strong>: Doesn&rsquo;t Move. Attacks Armies in section normally.</p>
<p><strong>Monster Ability</strong>: <em>Lord of Bones - </em>Roll a d10 whenever a Bandit, Non-Skeleton Monster, Sallied Forth Army, or War Machine is killed. On a 3+, replace the destroyed unit with a Skeleton Token.</p>
<p><strong>Monster Ability</strong>: <em>Weaver of Necromantic Rites -</em> If there are no Armies in its section when activated, place a Skeleton Token in its Section. Whenever the Lich destroys an Army, replace it with a Skeleton without rolling.</p>
<p><strong>Loot</strong>: The first time The Lich is (fully) destroyed, the slayer in the same Section gains the item <strong><em>Amulet of Souls</em></strong><em>: Whenever an Army in your Section is destroyed, you may roll a die. On a 3+, a new Army appears in Reserves. On a 1-2, become Wounded, and spawn the Lich and a Skeleton Token in that Section.</em></p>
<p><br /><br /></p>
<p><strong>Skeleton Tokens</strong></p>
<p>1 HP | 1 Dice | 7+</p>
<p><strong>Activation</strong>: Does not Move. Attacks Armies in its Section. Does not Attack the Castle unless in a Near Section and a Siege Tower is present.</p>
<p><strong>Monster Ability</strong>: <em>Unliving Phyllactery - </em>Whenever The Lich would die by any means (or is otherwise not present on the board), replace a random Skeleton Token with The Lich, prioritizing Sections with no Armies or Counselors present. The Lich is not considered to be Destroyed/Defeated until it and all Skeletons are defeated.</p>
<p><br /><br /></p>
<p><strong>The Zubbenhowzer Cannon Team</strong> - <em>The Bardok Kingdoms, that troublesome coalition of mountain lords still clinging to long past days of glory and riches, have come across a relic of their ancestors, excavated from one of their great necropolises beneath the earth, or else sequestered it away until this day where it could bring us ruin. The ground quakes with each thunderous belch, each ashen jut of fire erupting from that metallic beast&rsquo;s bale mouth. Destroy it, no matter the cost, lest this contraption of steel and flame bring a dishonorable end to the age of stone walls and stout hearts.&nbsp;</em></p>
<p>2HP | 2 Dice | 4+</p>
<p><strong>Spawn</strong>: Far Mountain</p>
<p><strong>Activation</strong>: Doesn&rsquo;t move. Only attacks the Castle, even when Armies are present in its Tile.&nbsp;</p>
<p><strong>Monster Ability</strong>: <em>Unstable Creation | Last Roar of the Dragonslayer - </em>When it dies it explodes, destroying all Armies and Besiegers in the same section as it.</p>
<p><strong>Monster Ability</strong>: <em>Siegebreaker</em> - Damage inflicted by the <em>Zubbenhowzer </em>does not draw a <em>Damaged!</em> Card, instead directly removing HP from the Wall.</p>
<p><strong>Loot</strong>: The first time The Zubbenhowzer Cannon Team is destroyed, the slayer in the same Section gains the item <strong><em>Powder &amp; Ashes</em></strong><em>: Whenever an Army in your Section is destroyed, it may immediately attack, and does so as if you were Leading it.</em> If the Cannon Team was destroyed by an Army attack, also gain the item <strong><em>Insane Bravado: </em></strong><em>Armies you lead gain +1 to hit when in the same Section as a Monster.</em></p>
<p><br /><br /></p>
<p><strong>Fire Drake </strong>- <em>High in the Durnholm Mountains, an ancient threat stirs; a great wyrm, a creature of fire made flesh. Though young, this flamekin is the heir of the beasts which cast down the golden age of the Highland Empire, and permitted our own Kingdom&rsquo;s eastern expansion. Be weary! The Drake&rsquo;s flame burns hot, hot enough to melt steel and stone alike, and there is the vicious cunning of an apex predator lurking within that abominable wyrm.</em></p>
<p>5HP | 5 Dice | 7+</p>
<p><strong>Spawn</strong>: Far Mountains</p>
<p><strong>Activation</strong>: Moves up to 2 Sections to attack the biggest Army, ignoring zone of control, prioritizing the furthest Army away, randomized or chosen by a revealed Traitor in the event of a tie. If No Armies are in range, moves to its current Quadrant&rsquo;s Near Section and Attacks the Castle Directly.</p>
<p><strong>Monster Ability</strong>: <em>Conflagration </em>- Any excess hits against Armies in a Section inflicts <em>Damage!</em> on the Castle.</p>
<p><strong>Monster Ability</strong>: <em>Skybound Cataclysm - </em>The Drake attacks Armies it flies over while moving.</p>
<p><strong>Monster Ability</strong>: <em>Apex Predator - </em>The Drake ignores Zone of Control and can travel from the Near Beach to the Near Plains, and the Near Mountains and Near Woods, and vice versa. While at 2 or 1HP, the Drake changes its Activation to instead move to the Distant Mountains as directly as possible. Whenever it is Activated while in the Distant Mountains, it will move to Attack any Armies in the Mountain Quadrant (prioritizing the Near Mountains), then fly back to the Distant Mountains, regardless of distance.</p>
<p><strong>Loot</strong>: The first time The Fire Drake is destroyed, the slayer in the same Section gains the item <strong><em>Dragonbone Standard: </em></strong><em>All units in your Section gain +1 to hit. </em>If the Fire Drake was slain in the Distant Mountains, also gain +2 Treasury.</p>
<p><br /><br /></p>
<p><strong>Ogre </strong>- <em>A brutish and vicious beast, the Ogre is a territorial predator by nature. No doubt driven into a frenzy by some fiendish art of our western foes, the uncivilized thug is as deadly a threat as they come, nigh-impervious to lone adventurers or even small bands of soldiers due to its disgustingly resilient hide and regenerative power fueled by the very life-essence of those sentient creatures it devours. Bring an end to this threat which has for too long plagued our fair forests, and slain many an innocent traveler.</em></p>
<p>3HP | 3 Dice | 4+</p>
<p><strong>Spawn</strong>: Far Woods</p>
<p><strong>Activation</strong>: Moves and attacks normally.</p>
<p><strong>Monster Ability</strong>: <em>Regenerating Skin - </em>Whenever the Ogre kills an Army or Damages the Castle, it heals 1 missing HP.&nbsp;</p>
<p><strong>Monster Ability</strong>: <em>Thick Hide</em> - The Ogre ignores the first hit allocated to it each Attack.</p>
<p><strong>Monster Ability</strong>: <em>Devoured - </em>When a Councilor is Wounded by the Ogre, they discard all cards in their hand.</p>
<p><strong>Loot:</strong> The first time The Ogre is destroyed, the slayer gains the item <strong><em>Ogreskin Armor: </em></strong><em>You cannot become Wounded, moving to the Porticullus Gate if Sallied Forth without an attached Army remaining. Cancel 1 hit made against Armies in your Section per turn. You cannot gain additional Moves or Actions on your turn while wearing this. </em>If a Councilor was Devoured by the Ogre, also gain +2 Supplies.</p>
<p><br /><br /></p>
<p><strong>Colossus </strong>- <em>A titanic legend out of the pages of myth, the Colossus is the last of its kind, its forefathers and kin having perished to a lone warrior back in the age of legend. It had also long been thought slain, but instead appears to have lied dormant beneath the earth for aeons until it has awoken in this darkening age. Cast it down, lest the shadow of this primeval titan fall upon our walls.</em></p>
<p>8HP | 3 Dice | 8+</p>
<p><strong>Spawns</strong>: Far Plains</p>
<p><strong>Activation</strong>: Moves and attacks normally.</p>
<p><strong>Monster Ability</strong>: <em>Colossal Shadow - </em>The Colossus can always be targeted by attacks, regardless of other Enemy Units.In turn, The Colossus must be targeted by attacks if possible; hits cannot be allocated to other Besiegers while the Colossus is present in the same Section.</p>
<p><strong>Monster Ability</strong>: <em>Force of Nature - </em>Whenever the Colossus produces a hit, it counts as two hits made for damage purposes. The Colossus requires 2 Hits to be allocated to it to lose 1HP.</p>
<p><strong>Monster Ability</strong>: <em>Living Rampart</em> - Allows Bandits in the same &lsquo;Near&rsquo; Section to Attack the Castle.</p>
<p><strong>Loot</strong>: The first time The Colossus is destroyed, the slayer gains the item <strong><em>Living Fortifications.</em></strong><em> The Wall gains +1 Max HP. Besiegers who roll a 1 when attacking the Castle suffer 1 Damage. -1 Start-of-Turn draw to the bearer of this item.</em></p>
<p><br /><br /></p>
<p><strong>The Limencello</strong> - <em>No fiercer band of pirates, no more infamous a ship roams the seven seas than The Limencello, whose buccaneers and brigands are notorious for the most daring and dastardly of raids, even stealing treasure-barges out from the middle of war fleets. Now, it seems, they have come to raid our own coffers, braving through a warzone to do so.</em></p>
<p>3HP | 2 Dice | 5+</p>
<p><strong>Spawn</strong>: Far Beach.&nbsp;</p>
<p><strong>Activation</strong>: Doesn&rsquo;t move. Attacks the Castle unless Armies are in its section, in which case it attacks them normally.</p>
<p><strong>Monster Ability:</strong><em>Raiders of the Savage Seas </em>- Any time <em>The Limencello</em> would inflict <em>Damage!</em> on the Castle, <em>The Limencello</em> instead steals two Resources, each randomly chosen, and spawns a Pirate in its Section.</p>
<p><strong>Monster Ability:</strong><em>Repel Boarders!</em> -Whenever any number of Armies enters the Limencello&rsquo;s Section, spawn 3 Pirates in its Section. When the Limencello is Activated, if any Armies are in its Section, spawn 3 Pirates in its Section (they can act immediately).</p>
<p><strong>Monster Ability:</strong><em>Undying Legend</em> - At the start of the next Ritual Tier after it was destroyed, <em>The Limencello</em> reappears in a random Far Section it has not appeared in before. If the Councilor bearing <em>Treasures of the World</em> is Wounded while <em>The Limencello</em> is on the battlefield, it reclaims the Item and must be looted again.</p>
<p><strong>Loot</strong>: The first time The Limencello is destroyed, the slayer gains the item <strong><em>Treasures of the World: </em></strong><em>Grants +1 of each Resource. The bearer gains +1 start of turn draw in any skillset of choice.</em></p>
<p><br /><br /></p>
<p><strong>Pirate Tokens</strong></p>
<p>1 HP | 1 Dice | 7+</p>
<p><strong>Activation</strong>: Moves and Attacks normally, but three Pirates will stay behind with <em>The Limencello</em>, not moving. Cannot attack the Castle directly, but will (collectively, but separate from any Bandits) build a Siege Tower when activated in a Near Section.</p>
<p><strong>Monster Ability</strong>: <em>Plundering Party - </em>Pirates steal 1 resource at random instead of inflicting Damage whenever they attack the Castle.</p>
<p><strong>Monster Ability</strong>: <em>Loot &amp; Run </em>- When <em>The Limoncello</em> is destroyed, all remaining Pirates are removed. When the Limencello returns, all removed Pirates reappear with it in the same Far Section.</p>
<p><br /><br /></p>
<p><strong>Wraith </strong>-&nbsp;</p>
<p>1HP | 1 Dice | 8+</p>
<p><strong>Spawn</strong>: In the Section with the most Besiegers, or else the Far Woods.</p>
<p><strong>Activation:</strong> Teleports to the Section with the most number of Besiegers/Enemies. Otherwise, does not move.</p>
<p><strong>Monster Ability:</strong><em>Aura of Dread</em> - All Armies in the Wraith&rsquo;s section have -1 to hit.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Ethereal - </em>Can only be hit/have a hit allocated to it if the result was a natural 10 (all other rules of allocation/targeting still apply).</p>
<p><strong>Monster Ability:</strong><em>The Slowest Terror </em>- Whenever The Wraith destroys an Army, increase the effect of <em>Aura of Dread </em>(-2, -3, etc).</p>
<p><strong>Loot:</strong> The first time The Wraith is destroyed, the slayer gains the item <strong><em>Cloak of Mists: </em></strong><em>The wearer can travel to any room when moving between locations by discarding a skill card from their hand, or may Sally Forth or Return to Keep from/to any Near Section by doing the same.</em></p>
<p><br /><br /></p>
<p><strong>The Thing In The Dark</strong> - <em>&ldquo;&hellip;And so the Thing in the Dark brought an end to our hero&rsquo;s lark, devouring him whole without even a bark; Now the lesson I hope you&rsquo;ll agree is so plain to see, to never trust a stranger - or even three!, for only you can face your fears while they&rsquo;re still small, face them before they have the chance to grow big and tall; when you&rsquo;re all alone, lost in the dark.&rdquo;</em></p>
<p>3HP | 0 Dice | 11+</p>
<p><strong>Spawn:</strong> Far Mountains</p>
<p><strong>Activation:</strong> Does not Move. Attacks Armies in its section.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Cascading Terror </em>- Increase the difficulty of Crises (Pass and Partial Pass Tiers) drawn by 1.</p>
<p><strong>Monster Ability:</strong><em>Fear Unfaced</em> - If The Thing In The Dark cannot Attack when Activated, increase its HP and the effect of its <em>&ldquo;Cascading Terror&rdquo; </em>ability by 1.</p>
<p><strong>Monster Ability:</strong><em>Sweeping Hysteria </em>- Gains +1 die and +1 to hit rolls for each Army and Counselor in its Section.&nbsp;</p>
<p><strong>Loot:</strong> The first time The Thing In The Dark is destroyed, the slayer in the same Section (or else it drops in that Section) gains the item <strong><em>Hamartia Overcome</em></strong><em>: You may ignore the effects of your Flaw.</em></p>
<p><br /><br /></p>
<p><strong>The Changeling&nbsp;</strong></p>
<p>2HP | 1 Dice | 6+</p>
<p><strong>Spawn:</strong> In the Section with the most Besiegers <em>or</em> the Far Woods.</p>
<p><strong>Activation:</strong> Moves to the adjacent section with the most number of Besiegers, or randomly between them on ties. If there are no adjacent Sections with Besiegers, moves to an adjacent Section with no Armies further away from the closest Army than its Section, randomly on ties. Otherwise, does not move. The Changeling cannot Attack the Castle unless a Siege Tower is present in its (Near) Section.</p>
<p><strong>Monster Ability:</strong><em>Trickster</em> - When Activated, draw and resolve the top card of the Crisis Deck. If possible, its difficulty (overall and tiers) is increased by 3.</p>
<p><strong>Monster Ability:</strong><em>Mischievous Meddler </em>- All Skill Tests draw an additional Chance Card from the Fate Deck while The Changeling is alive.</p>
<p><strong>Monster Ability:</strong><em>Cunning Master of Deceit </em>- Attack rolls of 1 reflect and inflict a hit on the Army. The Changeling cannot be targeted by the Ballista (though excessive hits may still spillover and damage it).</p>
<p><strong>Loot:</strong> The first time The Changeling is destroyed, the slayer gains the item <strong><em>Parabolic Mirror: </em></strong><em>As an Action, discard this Item to create a second copy of your Councilor. This Clone Councilor has their own turn, including card draw, actions, and moves which you control, but also has their own Crisis Phase. This Clone vanishes at the end of the current Ritual Tier, or when Wounded.</em></p>
<p><br /><br /></p>
<p><strong>The Kraken</strong> - [spawns with two tentacles]</p>
<p>5HP | X Dice | 8+</p>
<p><strong>Spawn:</strong> The Far Beach</p>
<p><strong>Activation:</strong> Doesn&rsquo;t Move. Attacks Armies in its Section.</p>
<p><strong>Monster Ability:</strong><em>From the Darkest Depths </em>- When the Kraken Attacks Armies in its Section, it hits on a 4+ and rolls one die for each Tentacle it has.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Boundless Emergence</em> - Each time the Kraken is Activated, spawn two additional Tentacle Tokens before resolving the Kraken&rsquo;s Attacks.</p>
<p><strong>Monster Ability:</strong><em>Monstrous Reach - </em>When activated, if no Armies are present in its Section, the Kraken attacks the Castle, rolling 1 Die for each Tentacle it has.&nbsp;</p>
<p><strong>Loot:</strong> The first time The Kraken is destroyed, the slayer gains the item <strong><em>Seabrine Ritual Tome:</strong> As an Action, choose a Monster in the same Section. Ignore the effects of one of their Monster Abilities until you use this Item again. </em>If the Kraken was slain with at least 5 Tentacles still alive, also gain +1 Mana and +1 Supplies.</p>
<p><br /><br /></p>
<p><strong>The Kraken&rsquo;s Tentacles Tokens</strong></p>
<p>1HP | 1 Dice | X+</p>
<p><strong>Activation:</strong> The Kraken&rsquo;s Tentacles act according to the Kraken&rsquo;s Rules. They do not move.</p>
<p><strong>Monster Ability:</strong><em>Arms of Leviathan </em>- The Kraken&rsquo;s Tentacles Act in accordance with The Kraken&rsquo;s rules. If the Kraken is destroyed or otherwise removed, all Tentacles instantly die and are removed.</p>
<p><strong>Monster Ability:</strong><em>Impeding Tendrils </em>- The Kraken&rsquo;s Tentacles will automatically take any untargeted damage/hits for the Kraken. (In other words, they are higher in the hit priority queue).</p>
<p><br /><br /></p>
<p><strong>Fungal Horror </strong>-&nbsp;</p>
<p>3HP | 1 Dice | 8+</p>
<p><strong>Spawn:</strong> Far Woods</p>
<p><strong>Activation:</strong> Doesn&rsquo;t Move. Attacks Armies in its Section.</p>
<p><strong>Monster Ability:</strong><em>Creeping Corruption</em> - When activated, create two new Fungal Creeper Tokens in up to two random adjacent Sections, prioritizing the Section(s) with the least Fungal Creeper Tokens. If no Armies are in its Section when Activated, spawn one additional Fungal Creeper Token in its Section.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Obscuring Brush</em> -Fungal Horror cannot be targeted or have hits allocated to it while there are any Fungal Creepers in its Section. Councilors &amp; Armies have -1 to hit while targeting any non-Fungal Horror/Creeper Besiegers in this Section.</p>
<p><strong>Monster Ability:</strong><em>Growing Threat </em>- For every 2 Creepers on the Board, gain +1 to hit. For every 3 Creepers on the Board, gain +1 Combat Die.</p>
<p><strong>Loot:</strong> The first time The Fungal Horror is destroyed, the slayer gains the item <strong><em>Flowering Briarheart: </em></strong><em>Place a Skill Card on this item (you may replace it once per turn, but must always have a card here). At any applicable time you may exhaust this item to resolve the Play effect of that Skill Card. Discard any Skill Cards with the same name the moment they enter your Hand. This item unexhausts whenever you draw (and do not discard) a Skill Card.</em> If there are no Fungal Creepers on the map when the Fungal Horror is destroyed, also gain the item <strong><em>Outpost Trading Caravans:</em></strong><em> Exhaust this item to gain +1 to a Resource of choice, and 3 Skillcards of any Skillset. This item is unexhausted each time you travel from the Distant Woods to the Porticullus Gate.</em></p>
<p><br /><br /></p>
<p><strong>Fungal Creeper Tokens</strong></p>
<p>2HP | 1 Dice | 8+</p>
<p><strong>Activation:</strong> Doesn&rsquo;t Move. If in a Near Section, can attack the Castle directly.</p>
<p><strong>Monster Ability:</strong><em>Devouring Growth</em> - When activated, create a new Fungal Creeper in the adjacent Section with the least number of Fungal Creepers, randomly on ties. Creepers in Far Sections can only spread to Near Sections if every Far Section has at least one Creeper in it, and vice versa.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Creeping Threat -</em> For every 2 Creepers in a Section, they gain +1 to hit.</p>
<p><strong>Monster Ability:</strong><em>Thick Roots</em> - Fungal Creepers count twice for the purposes of establishing Zone of Control. When the Fungal Horror is slain, all Fungal Creepers lose 1HP.&nbsp;</p>
<p><br /><br /></p>
<p><strong>The Black Knight&nbsp;</strong></p>
<p>3HP | 3 Dice | 3+</p>
<p><strong>Spawn:</strong> Far Plains.</p>
<p><strong>Activation:</strong> Moves to an adjacent Section that contains a Counselor and Attacks, choosing the highest Military skillset then randomly if multiple options are available. If no adjacent Sections have a Counselor, moves to an adjacent Section with the most Armies and Attacks, randomly on ties or not at all if none are in range.</p>
<p><strong>Monster Ability:</strong><em>Challenge Unanswered </em>- If there are no Armies in range of the Black Knight when it is Activated, lose -1 Loyalists. If this Activation was caused by the Black Knight being hit by a non-Army Attack, lose an additional -1 Loyalists.</p>
<p><strong>Monster Ability:</strong><em>Counterstroke </em>- Once per turn, when a hit is produced but before it is allocated to any Besieger in the Black Knight&rsquo;s Quadrant, including the Black Knight themself, the Black Knight Activates.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Slayer of Champions </em>- The Black Knight rolls an additional die when Attacking for each Councilor in their Section.</p>
<p><strong>Loot:</strong> The first time The Black Knight is destroyed, the slayer gains the item <strong><em>The Black Crown: </em></strong><em>The wearer may roll an additional die and gain +1 to hit when attacking for each unique Monster in their section, but every time you resolve an Attack with a Monster still in the Section, lose -1 Loyalists. If the Black Knight was slain by an Army led by a Councilor, then this item additionally grants +2 Military Skillset.</em></p>
<p><br /><br /></p>
<p><strong>The Hydra</strong></p>
<p>10HP | 1 + X Dice | 7+</p>
<p><strong>Spawn:</strong> Far Woods.</p>
<p><strong>Activation:</strong> Moves and Attacks normally, can attack the castle.</p>
<p><strong>Monster Ability:</strong><em>The Heads of the Hydra</em> - Rolls +1 die when attacking for each HP it is missing.</p>
<p><strong>Monster Ability:</strong><em>Poisonous Blood </em>- Missed attacks made by Armies in the Hydra&rsquo;s Section are reflected, and deal a hit to the Army.</p>
<p><strong>Monster Ability:</strong><em>Burning Bolts</em> - Hits inflicted against The Hydra by The Ballista or Spell(Firebolt) deal 2x damage.</p>
<p><strong>Loot:</strong> The first time The Hydra is destroyed, the slayer gains the item <strong><em>Nessus&rsquo;s Bane:</em></strong><em> As an action, discard this item to destroy a single Monster in your Section. </em>If the Burning Bolts ability was never utilized, then additionally gain the item <strong><em>Consolation Constellation: </em></strong><em>Once per Ritual Tier, you may exhaust this item to gain 1 Skillcard of any Skillset for each unique non-Token Monster slain this game.</em></p>
<p><br /><br /></p>
<p><strong>Warmech </strong>- <em>1/64. Or something like that.</em></p>
<p>4HP | 1 Dice | 2+</p>
<p><strong>Spawn:</strong> The Far Mountains</p>
<p><strong>Activation:</strong> Warmech does not move, and always Attacks the Castle. <em>Multicore Omnipattern Targeting Schema</em> may result in Warmech attacking both Armies and the Castle simultaneously, so one die should be designated for the Castle before rolling.</p>
<p><strong>Monster Ability:</strong><em>Multicore Omnipattern Targeting Schema</em> - Warmech rolls +1 die for each Army in its Section. Exactly one die is always targeted at the Castle, regardless of the number of Armies present (or not).</p>
<p><strong>Monster Ability:</strong><em>Obsolete Hardware </em>- Warmech gains -1 to hit for each Army <em>and</em> Councilor in its Section.</p>
<p><strong>Monster Ability:</strong><em>Preemptive Strike</em> - Whenever any number of Armies enter Warmech&rsquo;s Section for the first time each Round, Warmech immediately Activates.</p>
<p><strong>Loot:</strong> The first time Warmech is destroyed, the slayer gains the item <strong><em>Skycastle Cannon Targeting Grid: </em></strong><em>As an Action, discard this item. Deal 5 Damage to all Units in the same Section as the bearer. This deals 1 less Damage for each Unit in the Section.</em></p>
<p><br /><br /></p>
<p><strong>The Conquerer </strong>-</p>
<p>1HP | 1 Dice | 6+</p>
<p><strong>Spawn:</strong> Far Beach.</p>
<p><strong>Activation:</strong> Moves and Attacks normally. Cannot attack the Castle unless a Siege Tower is present in his Section.</p>
<p><strong>Monster Ability:</strong><em>Root of a Legend </em>- All Besiegers gain +1 to their Attack rolls in his Quadrant.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Burning the Ships </em>- After The Conqueror is Activated for the first time, spawn 3 Bandits and a War Machine in the Far Beach. Each time after, spawn 1 Bandit.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>End of the Age of Conquest - </em>The first time The Conqueror is slain, gain +1 Loyalists.</p>
<p><strong>Loot:</strong><em>A Claim Refuted </em>- If all other Claimants to the Throne have been defeated, gain an additional +2 Loyalists.</p>
<p><br /><br /></p>
<p><strong>The Elven Prince </strong>-&nbsp;</p>
<p>1HP | 1 Dice | 6+</p>
<p><strong>Spawn:</strong> Far Beach.</p>
<p><strong>Activation:</strong> Moves and Attacks normally. Cannot attack the Castle unless a Siege Tower is present in her Section.</p>
<p><strong>Monster Ability:</strong><em>The Defiant Scion </em>- All Besiegers gain +1 to their Attack rolls in her Quadrant.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Fey Magicks or Homefield Knowledge </em>- All Armies have -2 to their Attack rolls while in the Woods Quadrant.</p>
<p><strong>Monster Ability:</strong><em>The March of Time, Undeterred </em>- When this Monster is slain, gain +1 Loyalists.</p>
<p><strong>Loot:</strong><em>A Claim Refuted </em>- If all other Claimants to the Throne have been defeated, gain an additional +2 Loyalists.</p>
<p><br /><br /></p>
<p><strong>The Mountain Lord</strong> -</p>
<p>1HP | 1 Dice | 6+</p>
<p><strong>Spawn:</strong> Far Mountain.</p>
<p><strong>Activation:</strong> Moves and Attacks normally. Cannot attack the Castle unless a Siege Tower is present in his Section.</p>
<p><strong>Monster Ability:</strong><em>Dreams of a Resurgent Empire </em>- All Besiegers gain +1 to their Attack rolls in his&nbsp;</p>
<p>Quadrant.</p>
<p><strong>Monster Ability:</strong><em>Garnering Support </em>- Each time an Army is slain in the Mountain Quadrant or a Besieger in the Mountain Quadrant inflicts Damage, spawn 1 Bandit in the Far Mountains. Each time a Councilor is Wounded in the Quadrant or the Wall is cracked, also spawn a War Machine.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>Vengeance Denied </em>- When this Monster is slain, gain +1 Loyalists.</p>
<p><strong>Loot:</strong><em>A Claim Refuted </em>- If all other Claimants to the Throne have been defeated, gain an additional +2 Loyalists.</p>
<p><br /><br /></p>
<p><strong>The Outlaw King</strong> -&nbsp;</p>
<p>1HP | 1 Dice | 6+</p>
<p><strong>Spawn:</strong> Far Plains.</p>
<p><strong>Activation:</strong> Moves and Attacks normally. Cannot attack the Castle unless a Siege Tower is present in her Section.</p>
<p><strong>Monster Ability:</strong><em>Folk Hero </em>- All Besiegers in her Quadrant gain +1 to their Attacks.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>The Legend Lives On </em>- After this Monster is slain, all Besiegers gain +1 to their Attacks for the remainder of this Ritual Tier and spawn 4 Bandits in each Far Section.&nbsp;</p>
<p><strong>Monster Ability:</strong><em>There lies the Gentleman</em> - When this Monster is slain, gain +1 Loyalists.&nbsp;</p>
<p><strong>Loot:</strong><em>A Claim Refuted </em>- If all other Claimants to the Throne have been defeated, gain an additional +2 Loyalists.</p>`;
const items = `<p><strong>Fortified Thatching</strong>: When a Room you are would be Damaged, discard this item to negate the Damage.</p>
<p><strong>Amulet of Souls</strong>: Whenever an Army in your Section is destroyed, you may roll a die. On a 3+, a new Army appears in Reserves. On a 1-2, become Wounded, and spawn the Lich and a Skeleton Token in that Section.</p>
<p><strong>Powder &amp; Ashes</strong>: Whenever an Army in your Section is destroyed, it may immediately attack, and does so as if you were Leading it.</p>
<p><strong>Insane Bravado: </strong>Armies you lead gain +1 to hit when in the same Section as a Monster.</p>
<p><strong>Dragonbone Standard: </strong>All units in your Section gain +1 to hit. If the Fire Drake was slain in the Distant Mountains, also gain +2 Treasury.</p>
<p><strong>Ogreskin Armor: </strong>You cannot become Wounded, moving to the Porticullus Gate if Sallied Forth without an attached Army remaining. Cancel 1 hit made against Armies in your Section per turn. You cannot gain additional Moves or Actions on your turn while wearing this. If a Councilor was Devoured by the Ogre, also gain +2 Supplies.</p>
<p><strong>Living Fortifications.</strong> The Wall gains +1 Max HP. Besiegers who roll a 1 when attacking the Castle suffer 1 Damage. -1 Start-of-Turn draw to the bearer of this item.</p>
<p><strong>Treasures of the World: </strong>Grants +1 of each Resource. The bearer gains +1 start of turn draw in any skillset of choice.</p>
<p><strong>Cloak of Mists: </strong>The wearer can travel to any room when moving between locations by discarding a skill card from their hand, or may Sally Forth or Return to Keep from/to any Near Section by doing the same.</p>
<p><strong>Hamartia Overcome</strong>: You may ignore the effects of your Flaw.</p>
<p><strong>Parabolic Mirror: </strong>As an Action, discard this Item to create a second copy of your Councilor. This Clone Councilor has their own turn, including card draw, actions, and moves which you control, but also has their own Crisis Phase. This Clone vanishes at the end of the current Ritual Tier, or when Wounded.</p>
<p><strong>Seabrine Ritual Tome: </strong>As an Action, choose a Monster in the same Section. Ignore the effects of one of their Monster Abilities until you use this Item again. If the Kraken was slain with at least 5 Tentacles still alive, also gain +1 Mana and +1 Supplies.</p>
<p><strong>Flowering Briarheart: </strong>Place a Skill Card on this item (you may replace it once per turn, but must always have a card here). At any applicable time you may exhaust this item to resolve the Play effect of that Skill Card. Discard any Skill Cards with the same name the moment they enter your Hand. This item unexhausts whenever you draw (and do not discard) a Skill Card.</p>
<p><strong>Outpost Trading Caravans:</strong> Exhaust this item to gain +1 to a Resource of choice, and 3 Skillcards of any Skillset. This item is unexhausted each time you travel from the Distant Woods to the Porticullus Gate.</p>
<p><strong>The Black Crown: </strong>The wearer may roll an additional die and gain +1 to hit when attacking for each unique Monster in their section, but every time you resolve an Attack with a Monster still in the Section, lose -1 Loyalists. If the Black Knight was slain by an Army led by a Councilor, then this item additionally grants +2 Military Skillset.</p>
<p><strong>Nessus&rsquo;s Bane:</strong> As an action, discard this item to destroy a single Monster in your Section. If the Burning Bolts ability was never utilized, then additionally gain the item <strong>Consolation Constellation: </strong>Once per Ritual Tier, you may exhaust this item to gain 1 Skillcard of any Skillset for each unique non-Token Monster slain this game.</p>
<p><br /><strong>Skycastle Cannon Targeting Grid: </strong>As an Action, discard this item. Deal 5 Damage to all Units in the same Section as the bearer. This deals 1 less Damage for each Unit in the Section.</p>`;
