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
    // PLAYABLE: {
    //     KEY: 'PLAYABLE',
    //     TYPE: [2, 2, 2,
    //         1, 1, 1, 1, 1,
    //         1, 1, 1, 1, 1,
    //         1, 1, 1, 1, 1,
    //         1, 1, 1, 1, 1,
    //         1, 1, 1, 1, 1,
    //         1, 1],
    //     TYPE_ARGS: [1, 2, 3,
    //         1, 2, 3, 4, 5,
    //         6, 7, 8, 9, 10,
    //         11, 12, 13, 14, 15,
    //         16, 17, 18, 19, 20,
    //         21, 22, 23, 24, 25,
    //         26, 27],
    //     NAME: ['FILLER', 'COCKROACH', 'STEAL',
    //         'WHITE_PASTA', 'WHITE_RICE', 'WHOLEGRAIN_PASTA', 'ROAST_POTATO', 'BAKED_SWEET_POTATO', 'BROWN_RICE', 'BLACK_RICE', 'LAMB_CHOP', 'ROAST_CHICKEN', 'CATFISH', 'TUNA', 'SALMON', 'ONIONS', 'ROASTED_PEANUTS', 'RED_BEANS', 'CHICKPEAS', 'ROASTED_CASHEW', 'PEPPERS', 'LENTILS', 'MUSHROOMS', 'ROASTED_ALMONDS', 'TOFU', 'CORN', 'TEMPEH', 'TOMATO', 'SEAWEED', 'SPINACH'],
    //     VALUE: [1, 2, 3,
    //         1, 1, 2, 2, 3,
    //         3, 4, 4, 5, 5,
    //         6, 6, 7, 7, 7,
    //         8, 8, 8, 9, 9,
    //         9, 11, 11, 11, 11,
    //         12, 12]
    // },
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

define([
    "dojo", "dojo/_base/declare",
    "ebg/core/gamegui",
    "ebg/counter",
    "ebg/stock",
    "ebg/zone"
],
    function (dojo, declare) {
        return declare("bgagame.superfoods", ebg.core.gamegui, {
            constructor: function () {
                console.log('superfoods constructor');
                console.log(this);

                // Here, you can init the global variables of your user interface
                // Example:
                // this.myGlobalValue = 1;

                // for (let player_id in Object.keys(gamedatas.players)) {
                //     let plate_1 = 'player_plate_1_' + player_id;
                //     let plate_2 = 'player_plate_2_' + player_id;
                //     let plate_3 = 'player_plate_3_' + player_id;

                //     this.GLOBAL_STATE.PLAYER_ZONE[player_id].PLATE[1] = plate_1;
                //     this.GLOBAL_STATE.PLAYER_ZONE[player_id].PLATE[1] = plate_2;
                //     this.GLOBAL_STATE.PLAYER_ZONE[player_id].PLATE[2] = plate_3;

                //     console.log(player_id);
                // }

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
                console.log(gamedatas)

                // Setting up player boards
                for (var player_id in gamedatas.players) {
                    var player = gamedatas.players[player_id];

                    // TODO: Setting up players boards if needed
                }

                // TODO: Set up your game interface here, according to "gamedatas"

                // for (var i in this.gamedatas['players'][this.player_id]['hand']) {
                //     var current_card = this.gamedatas['players'][this.player_id]['hand'][i];
                //     let card_type_id = getPlayableCardId(current_card.type, current_card.type_arg);
                //     console.log(current_card, card_type_id, this.GLOBAL_STATE.CARDS[CARD.PLAYABLE.KEY]);
                //     this.GLOBAL_STATE.CARDS[CARD.PLAYABLE.KEY].addToStockWithId(card_type_id, current_card.id, current_card.location);
                // }

                for (var player_id in this.gamedatas['players']) {

                }


                // this.GLOBAL_STATE.STOCK.addToStock(this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE[1] + "_" + this.GLOBAL_STATE.NUMBERS_SPRITE_NAME[1]);
                // this.GLOBAL_STATE.STOCK.addToStock(this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE[3] + "_" + this.GLOBAL_STATE.NUMBERS_SPRITE_NAME[3]);
                // this.GLOBAL_STATE.STOCK.addToStock(this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE[5] + "_" + this.GLOBAL_STATE.NUMBERS_SPRITE_NAME[5]);

                // this.GLOBAL_STATE.STOCK.setOverlap(1, 1);
                // this.GLOBAL_STATE.STOCK.updateDisplay();

                // show my hand
                let currentPlayer = Object.values(gamedatas.players).find(player => player.id == this.player_id);
                let currentPlayerHandHTML =
                    `
                        <div id="zone_${currentPlayer.id}" class="playertable whiteblock">
                            <div class="playertablename" style="color:#${currentPlayer.color};">
                                Hand
                            </div>
                            <div class="flex_row" id="playertablecard_${currentPlayer.id}">
                            ${Object.values(currentPlayer.hand).map((card, index) => {
                        return (`
                                    <div 
                                        key="${index}" 
                                        class="playertablecard_${Object.values(CARD).filter(x => Number(x.TYPE) == Number(card.type))[0]?.KEY.toLowerCase()}" 
                                        style="background-position: -${STATIC_VALUE.CARD_WIDTH * (Number(card.type_arg) - 1)}px 0"
                                    ></div>
                                `)
                    }).join('')}
                            </div>
                            <div class="playertablename" id="hand_score_wrap_${currentPlayer.id}">
                                <span class="hand_score_label"></span> <span id="hand_score_${currentPlayer.id}"></span>
                            </div>
                        </div>
                    `
                document.getElementById("hand").innerHTML = currentPlayerHandHTML;


                let playertablesHTML = Object.values(gamedatas.players).map((player, index) => {
                    return (`
                    <div id="zone_${player.id}" class="playertable whiteblock">
                        <div class="flex_row">
                            ${player.table.map((table, index) => {
                        return (`
                                            <div class="flex_col" id="playertablecard_${player.id}_${index}">
                                                ${Object.values(table).map((card, cardIndex) => {
                            return (`
                                                            <div 
                                                                key="${cardIndex}" 
                                                                class="overlap_col playertablecard_${Object.values(CARD).filter(x => Number(x.TYPE) == Number(card.type))[0]?.KEY.toLowerCase()}" 
                                                                style="background-position: -${STATIC_VALUE.CARD_WIDTH * (Number(card.type_arg) - 1)}px 0"
                                                            ></div>
                                                        `)
                        }).join('')}
                                            </div>
                                            `)
                    }).join('')}    
                        </div>
                        <div class="flex_row playertablecard_plate">
                            <div class="playertablecard_plate_left"></div>
                            <div class="playertablecard_plate_right"></div>
                        </div>
                        <div class="playertablename" style="color:#${player.color};">
                            ${player.name}
                        </div>
                    </div>
                `)
                }).join('');
                document.getElementById("playertables").innerHTML = playertablesHTML;

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
                console.log('Entering state: ' + stateName);

                switch (stateName) {

                    /* Example:
                    
                    case 'myGameState':
                    
                        // Show some HTML block at this game state
                        dojo.style( 'my_html_block_id', 'display', 'block' );
                        
                        break;
                   */


                    case 'dummmy':
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


                    case 'dummmy':
                        break;
                }
            },

            // onUpdateActionButtons: in this method you can manage "action buttons" that are displayed in the
            //                        action status bar (ie: the HTML links in the status bar).
            //        
            onUpdateActionButtons: function (stateName, args) {
                console.log('onUpdateActionButtons: ' + stateName);

                if (this.isCurrentPlayerActive()) {
                    switch (stateName) {
                        /*               
                                         Example:
                         
                                         case 'myGameState':
                                            
                                            // Add 3 action buttons in the action status bar:
                                            
                                            this.addActionButton( 'button_1_id', _('Button 1 label'), 'onMyMethodToCall1' ); 
                                            this.addActionButton( 'button_2_id', _('Button 2 label'), 'onMyMethodToCall2' ); 
                                            this.addActionButton( 'button_3_id', _('Button 3 label'), 'onMyMethodToCall3' ); 
                                            break;
                        */
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

            /* Example:
            
            onMyMethodToCall1: function( evt )
            {
                console.log( 'onMyMethodToCall1' );
                
                // Preventing default browser reaction
                dojo.stopEvent( evt );
    
                // Check that this action is possible (see "possibleactions" in states.inc.php)
                if( ! this.checkAction( 'myAction' ) )
                {   return; }
    
                this.ajaxcall( "/superfoods/superfoods/myAction.html", { 
                                                                        lock: true, 
                                                                        myArgument1: arg1, 
                                                                        myArgument2: arg2,
                                                                        ...
                                                                     }, 
                             this, function( result ) {
                                
                                // What to do after the server call if it succeeded
                                // (most of the time: nothing)
                                
                             }, function( is_error) {
    
                                // What to do after the server call in anyway (success or failure)
                                // (most of the time: nothing)
    
                             } );        
            },        
            
            */


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
                // this.notifqueue.setSynchronous( 'cardPlayed', 3111 );
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
