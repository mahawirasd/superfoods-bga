/**
 *------
 * BGA framework: Gregory Isabelli & Emmanuel Colin & BoardGameArena
 * SuperFoods implementation : © <Your name here> <Your email address here>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * superfoods.js
 *
 * SuperFoods user interface script
 * 
 * In this file, you are describing the logic of your user interface, in Javascript language.
 *
 */

const STATIC_VALUE = {
    CARD_WIDTH: 167.259259,
    CARD_HEIGHT: 234,
}

const CARD = {
    NUMBERS: {
        KEY: 'NUMBERS',
        TYPE: 1,
        TYPE_ARGS: [
            1, 2, 3, 4, 5,
            6, 7, 8, 9, 10,
            11, 12, 13, 14, 15,
            16, 17, 18, 19, 20,
            21, 22, 23, 24, 25,
            26, 27],
        NAME: [
            'WHITE_PASTA', 'WHITE_RICE', 'WHOLEGRAIN_PASTA', 'ROAST_POTATO', 'BAKED_SWEET_POTATO', 'BROWN_RICE', 'BLACK_RICE', 'LAMB_CHOP', 'ROAST_CHICKEN', 'CATFISH', 'TUNA', 'SALMON', 'ONIONS', 'ROASTED_PEANUTS', 'RED_BEANS', 'CHICKPEAS', 'ROASTED_CASHEW', 'PEPPERS', 'LENTILS', 'MUSHROOMS', 'ROASTED_ALMONDS', 'TOFU', 'CORN', 'TEMPEH', 'TOMATO', 'SEAWEED', 'SPINACH'],
        VALUE: [
            1, 1, 2, 2, 3,
            3, 4, 4, 5, 5,
            6, 6, 7, 7, 7,
            8, 8, 8, 9, 9,
            9, 11, 11, 11, 11,
            12, 12]
    },
    ACTIONS: {
        KEY: 'ACTIONS',
        TYPE: 2,
        TYPE_ARGS: [1, 2, 3],
        NAME: ['FILLER', 'COCKROACH', 'STEAL'],
        VALUE: [1, 2, 3]
    },
    PLATE: {
        KEY: 'PLATE',
        TYPE: 3,
        TYPE_ARGS: [1],
        NAME: ['PLATE'],
        VALUE: [1]
    },
    BACK: {
        KEY: 'BACK',
        TYPE: 4,
        TYPE_ARGS: [1],
        NAME: ['BACK'],
        VALUE: [1]
    },
}

const getPlayableCardId = (type, type_args) => {
    return Number(type) * 100 + Number(type_args);
}

const getCardDiv = (type, type_arg, overlap = 1) => {
    let card_type = Object.values(CARD).filter(x => Number(x.TYPE) == Number(type))[0]?.KEY.toLowerCase();
    let card_position = STATIC_VALUE.CARD_WIDTH * (Number(type_arg) - 1);
    if (card_type == CARD.PLATE.KEY.toLowerCase()) {
        return (`
            <div class="card_wrapper scale_50 plate">
                <div 
                    class="card playertablecard_plate_left" 
                >
                </div>
            </div>
            <div class="card_wrapper scale_50 plate">
                <div 
                    class="card playertablecard_plate_right" 
                >
                </div>
            </div>
        `)
    }
    return (`
        <div class="${overlap ? "overlap_col" : ""} card_wrapper scale_50 playable">
            <div 
                class="card playertablecard_${card_type}" 
                style="background-position: -${card_position}px 0"
            >
            </div>
        </div>
    `)
}

define([
    "dojo", "dojo/_base/declare",
    "ebg/core/gamegui",
    "ebg/counter"
],
    function (dojo, declare) {
        return declare("bgagame.superfoods", ebg.core.gamegui, {
            constructor: function () {
                console.log('superfoods constructor');

                // Here, you can init the global variables of your user interface
                // Example:
                // this.myGlobalValue = 0;
            },

            /*
                setup:
                
                This method must set up the game user interface according to current game situation specified
                in parameters.
                
                The method is called each time the game interface is displayed to a player, ie:
                _ when the game starts
                _ when a player refreshes the game page (F5)
                
                "gamedatas" argument contains all datas retrieved by your "getAllDatas" PHP method.
            */

            setup: function (gamedatas) {
                console.log("Starting game setup");
                console.log(gamedatas);

                // Example to add a div on the game area
                document.getElementById('game_play_area').insertAdjacentHTML('beforeend', `
                    <div id="superfoods_content">
                        <div id="hand"></div>
                        <div id="pantry"></div>
                        <div id="playertables" class="flex_row"></div>
                    </div>
                `);

                //     // Setting up player boards
                //     Object.values(gamedatas.players).forEach(player => {
                //         // example of setting up players boards
                //         this.getPlayerPanelElement(player.id).insertAdjacentHTML('beforeend', `
                //         <div id="player-counter-${player.id}">A player counter</div>
                //     `);

                //         // example of adding a div for each player
                //         document.getElementById('player-tables').insertAdjacentHTML('beforeend', `
                //         <div id="player-table-${player.id}">
                //             <strong>${player.name}</strong>
                //             <div>Player zone content goes here</div>
                //         </div>
                //     `);
                //     });
                var player = gamedatas.players[this.player_id];
                let playerHandHTML =
                    `
                    <div id="zone_${player.id}" class="playertable whiteblock">
                        <div class="playertablename" style="color:#${player.color};">
                            Hand
                        </div>
                        <div class="flex_row" id="playertablecard_${player.id}">
                        ${Object.values(player.hand).map((card) => getCardDiv(card.type, card.type_arg)).join('')}
                        </div>
                        <div class="playertablename" id="hand_score_wrap_${player.id}">
                            <span class="hand_score_label"></span> <span id="hand_score_${player.id}"></span>
                        </div>
                    </div>
                `
                document.getElementById("hand").innerHTML = playerHandHTML;

                var pantry = gamedatas.pantry;
                let pantryHTML =
                    `
                    <div id="zone_pantry" class="playertable whiteblock">
                        <div class="playertablename" style="color: black;">
                            Pantry
                        </div>
                        <div class="flex_row" id="playertablecard_pantry">
                        ${Object.values(pantry).map((card) => getCardDiv(card.type, card.type_arg)).join('')}
                        </div>
                    </div>
                `
                document.getElementById("pantry").innerHTML = pantryHTML;

                let playertablesHTML = Object.values(gamedatas.players).map((player, index) => {
                    return (`
                <div id="zone_${player.id}" class="playertable whiteblock">
                    <div class="flex_row">
                        ${player.table.map((table, index) => {
                        return (`
                        <div class="flex_col" id="playertablecard_${player.id}_${index}">
                            ${Object.values(table).map((card) => getCardDiv(card.type, card.type_arg)).join('')}
                        </div>
                    `)
                    }).join('')}    
                    </div>
                    <div class="flex_row playertablecard_plate">
                        ${getCardDiv(CARD.PLATE.TYPE, CARD.PLATE.TYPE_ARGS[0])}
                    </div>
                    <div class="playertablename" style="color:#${player.color};">
                        ${player.name}
                    </div>
                </div>
            `)
                }).join('');
                document.getElementById("playertables").innerHTML = playertablesHTML;


                // TODO: Set up your game interface here, according to "gamedatas"


                // Setup game notifications to handle (see "setupNotifications" method below)
                this.setupNotifications();

                console.log("Ending game setup");
            },


            ///////////////////////////////////////////////////
            //// Game & client states

            // onEnteringState: this method is called each time we are entering into a new game state.
            //                  You can use this method to perform some user interface changes at this moment.
            //
            onEnteringState: function (stateName, args) {
                console.log('Entering state: ' + stateName, args);

                switch (stateName) {

                    /* Example:
                    
                    case 'myGameState':
                    
                        // Show some HTML block at this game state
                        dojo.style( 'my_html_block_id', 'display', 'block' );
                        
                        break;
                   */


                    case 'dummy':
                        break;
                }
            },

            // onLeavingState: this method is called each time we are leaving a game state.
            //                 You can use this method to perform some user interface changes at this moment.
            //
            onLeavingState: function (stateName) {
                console.log('Leaving state: ' + stateName);

                switch (stateName) {

                    /* Example:
                    
                    case 'myGameState':
                    
                        // Hide the HTML block we are displaying only during this game state
                        dojo.style( 'my_html_block_id', 'display', 'none' );
                        
                        break;
                   */


                    case 'dummy':
                        break;
                }
            },

            // onUpdateActionButtons: in this method you can manage "action buttons" that are displayed in the
            //                        action status bar (ie: the HTML links in the status bar).
            //        
            onUpdateActionButtons: function (stateName, args) {
                console.log('onUpdateActionButtons: ' + stateName, args);

                if (this.isCurrentPlayerActive()) {
                    switch (stateName) {
                        case 'playerTurn':
                            const playableCardsIds = args.playableCardsIds; // returned by the argPlayerTurn

                            // Add test action buttons in the action status bar, simulating a card click:
                            playableCardsIds.forEach(
                                cardId => this.statusBar.addActionButton(_('Play card with id ${card_id}').replace('${card_id}', cardId), () => this.onCardClick(cardId))
                            );

                            this.statusBar.addActionButton(_('Pass'), () => this.bgaPerformAction("actPass"), { color: 'secondary' });
                            break;
                    }
                }
            },

            ///////////////////////////////////////////////////
            //// Utility methods

            /*
            
                Here, you can defines some utility methods that you can use everywhere in your javascript
                script.
            
            */


            ///////////////////////////////////////////////////
            //// Player's action

            /*
            
                Here, you are defining methods to handle player's action (ex: results of mouse click on 
                game objects).
                
                Most of the time, these methods:
                _ check the action is possible at this game state.
                _ make a call to the game server
            
            */

            // Example:

            onCardClick: function (card_id) {
                console.log('onCardClick', card_id);

                this.bgaPerformAction("actPlayCard", {
                    card_id,
                }).then(() => {
                    // What to do after the server call if it succeeded
                    // (most of the time, nothing, as the game will react to notifs / change of state instead)
                });
            },


            ///////////////////////////////////////////////////
            //// Reaction to cometD notifications

            /*
                setupNotifications:
                
                In this method, you associate each of your game notifications with your local method to handle it.
                
                Note: game notification names correspond to "notifyAllPlayers" and "notifyPlayer" calls in
                      your superfoods.game.php file.
            
            */
            setupNotifications: function () {
                console.log('notifications subscriptions setup');

                // TODO: here, associate your game notifications with local methods

                // Example 1: standard notification handling
                // dojo.subscribe( 'cardPlayed', this, "notif_cardPlayed" );

                // Example 2: standard notification handling + tell the user interface to wait
                //            during 3 seconds after calling the method in order to let the players
                //            see what is happening in the game.
                // dojo.subscribe( 'cardPlayed', this, "notif_cardPlayed" );
                // this.notifqueue.setSynchronous( 'cardPlayed', 3000 );
                // 
            },

            // TODO: from this point and below, you can write your game notifications handling methods

            /*
            Example:
            
            notif_cardPlayed: function( notif )
            {
                console.log( 'notif_cardPlayed' );
                console.log( notif );
                
                // Note: notif.args contains the arguments specified during you "notifyAllPlayers" / "notifyPlayer" PHP call
                
                // TODO: play the card in the user interface.
            },    
            
            */
        });
    });
