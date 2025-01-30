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
const DIRECTIONS = {
    1: ['S'],
    2: ['W', 'E'],
    3: ['S', 'W', 'E'],
    4: ['S', 'W', 'N', 'E'],
};

const INIT_GLOBAL_STATE = {
    CARD_WIDTH: 167.259259,
    CARD_HEIGHT: 234,
    NUMBERS_SPRITE_VALUE: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12],
    NUMBERS_SPRITE_NAME: ['WHITE_PASTA', 'WHITE_RICE', 'WHOLEGRAIN_PASTA', 'ROAST_POTATO', 'BAKED_SWEET_POTATO', 'BROWN_RICE', 'BLACK_RICE', 'LAMB_CHOP', 'ROAST_CHICKEN', 'CATFISH', 'TUNA', 'SALMON', 'ONIONS', 'ROASTED_PEANUTS', 'RED_BEANS', 'CHICKPEAS', 'ROASTED_CASHEW', 'PEPPERS', 'LENTILS', 'MUSHROOMS', 'ROASTED_ALMONDS', 'TOFU', 'CORN', 'TEMPEH', 'TOMATO', 'SEAWEED', 'SPINACH'],
    ACTION_SPRITE_VALUE: [100, 200, 300],
    ACTION_SPRITE_NAME: ['FILLER', 'COCKROACH', 'STEAL'],
}

const CARD_TYPE = {
    NUMBERS: 'NUMBERS',
    ACTIONS: 'ACTIONS',
    PLATE: 'PLATE',
    BACK: 'BACK',
}


define([
    "dojo", "dojo/_base/declare",
    "ebg/core/gamegui",
    "ebg/counter",
    "ebg/stock"
],
    function (dojo, declare) {
        return declare("bgagame.superfoods", ebg.core.gamegui, {
            constructor: function () {
                console.log('superfoods constructor');
                console.log(this);

                this.GLOBAL_STATE = { ...INIT_GLOBAL_STATE };
                // Here, you can init the global variables of your user interface
                // Example:
                // this.myGlobalValue = 0;

                // this.GLOBAL_STATE.DECK = new ebg.stock();
                // this.GLOBAL_STATE.DECK.create(this, $('deck'), this.GLOBAL_STATE.CARD_WIDTH, this.GLOBAL_STATE.CARD_HEIGHT);

                // for (let i = 0; i < this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE.length; i++) {
                //     let card_value = this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE[i];
                //     let card_name = this.GLOBAL_STATE.NUMBERS_SPRITE_NAME[i];
                //     let card_type_id = card_value + '_' + card_name;
                //     this.GLOBAL_STATE.DECK.addItemType(
                //         card_type_id,
                //         card_value, g_gamethemeurl + 'img/numbers.png', i);
                //     for (let j = 0; j < 3; j++) {
                //         this.GLOBAL_STATE.DECK.addToStockWithId(card_type_id, card_type_id + '_' + j);
                //     }
                // }

                // for (let i = 0; i < this.GLOBAL_STATE.ACTION_SPRITE_VALUE.length; i++) {
                //     let card_value = this.GLOBAL_STATE.ACTION_SPRITE_VALUE[i];
                //     let card_name = this.GLOBAL_STATE.ACTION_SPRITE_NAME[i];
                //     let card_type_id = card_value + '_' + card_name;
                //     this.GLOBAL_STATE.DECK.addItemType(
                //         card_type_id,
                //         card_value, g_gamethemeurl + 'img/numbers.png', i);
                //     for (let j = 0; j < 6; j++) {
                //         this.GLOBAL_STATE.DECK.addToStockWithId(card_type_id, card_type_id + '_' + j);
                //     }
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

                this.GLOBAL_STATE.PLAYER_HAND = new ebg.stock();
                this.GLOBAL_STATE.PLAYER_HAND.create(this, $('myhand'), this.GLOBAL_STATE.CARD_WIDTH, this.GLOBAL_STATE.CARD_HEIGHT);

                this.GLOBAL_STATE.PLAYER_HAND.image_items_per_row = 27;

                for (let i = 0; i < this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE.length; i++) {
                    let card_value = this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE[i];
                    let card_name = this.GLOBAL_STATE.NUMBERS_SPRITE_NAME[i];
                    let card_type_id = card_value + '_' + card_name;
                    this.GLOBAL_STATE.PLAYER_HAND.addItemType(
                        card_type_id,
                        card_value, g_gamethemeurl + 'img/numbers.png', i);
                }

                this.GLOBAL_STATE.PLAYER_HAND.addToStock(this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE[1] + "_" + this.GLOBAL_STATE.NUMBERS_SPRITE_NAME[1]);
                this.GLOBAL_STATE.PLAYER_HAND.addToStock(this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE[3] + "_" + this.GLOBAL_STATE.NUMBERS_SPRITE_NAME[3]);
                this.GLOBAL_STATE.PLAYER_HAND.addToStock(this.GLOBAL_STATE.NUMBERS_SPRITE_VALUE[5] + "_" + this.GLOBAL_STATE.NUMBERS_SPRITE_NAME[5]);

                this.GLOBAL_STATE.PLAYER_HAND.setOverlap(0, 0);
                this.GLOBAL_STATE.PLAYER_HAND.updateDisplay();

                let playertablesHTML = Object.values(gamedatas.players).map((player, index) => {
                    console.log(player, index)
                    console.log(DIRECTIONS, gamedatas.players, index)
                    return (`
                    <div class="playertable whiteblock playertable_${DIRECTIONS[Object.keys(gamedatas.players).length][index]}">
                        <div class="playertablename" style="color:#${player.color};">
                            <span class="dealer_token" id="dealer_token_p${player.id}">🃏</span> ${player.name}
                        </div>
                        <div class="playertablecard_row" id="playertablecard_${player.id}">
                            <div class="playertablecard_thumbnail"></div>
                            <div class="playertablecard_thumbnail"></div>
                            <div class="playertablecard_thumbnail"></div>
                            <div class="playertablecard_thumbnail"></div>
                            <div class="playertablecard_thumbnail"></div>
                        </div>
                        <div class="playertablename" id="hand_score_wrap_${player.id}">
                            <span class="hand_score_label"></span> <span id="hand_score_${player.id}"></span>
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
