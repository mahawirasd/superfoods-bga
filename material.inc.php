<?php

/**
 *------
 * BGA framework: Gregory Isabelli & Emmanuel Colin & BoardGameArena
 * SuperFoods implementation : © <Your name here> <Your email address here>
 * 
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * material.inc.php
 *
 * SuperFoods game material description
 *
 * Here, you can describe the material of your game with PHP variables.
 *   
 * This file is loaded in your game logic class constructor, ie these variables
 * are available everywhere in your game logic code.
 *
 */


/*

Example:

$this->card_types = array(
    1 => array( "card_name" => ...,
                ...
              )
);

*/

$this->card_types = array(
  1 => array(
    "card_name" => clienttranslate("NUMBERS"),
    "card_name_tr" => $this->_('NUMBERS'),
  ),
  2 => array(
    "card_name" => clienttranslate("ACTIONS"),
    "card_name_tr" => $this->_('ACTIONS'),
  )
);

$this->number_card_names = array(
  1 => array(
    "card_name" => clienttranslate("WHITE_PASTA"),
    "card_name_tr" => $this->_('WHITE_PASTA'),
    "card_value" => 1
  ),
  2 => array(
    "card_name" => clienttranslate("WHITE_RICE"),
    "card_name_tr" => $this->_('WHITE_RICE'),
    "card_value" => 1
  ),
  3 => array(
    "card_name" => clienttranslate("WHOLEGRAIN_PASTA"),
    "card_name_tr" => $this->_('WHOLEGRAIN_PASTA'),
    "card_value" => 2
  ),
  4 => array(
    "card_name" => clienttranslate("ROAST_POTATO"),
    "card_name_tr" => $this->_('ROAST_POTATO'),
    "card_value" => 2
  ),
  5 => array(
    "card_name" => clienttranslate("BAKED_SWEET_POTATO"),
    "card_name_tr" => $this->_('BAKED_SWEET_POTATO'),
    "card_value" => 3
  ),
  6 => array(
    "card_name" => clienttranslate("BROWN_RICE"),
    "card_name_tr" => $this->_('BROWN_RICE'),
    "card_value" => 3
  ),
  7 => array(
    "card_name" => clienttranslate("BLACK_RICE"),
    "card_name_tr" => $this->_('BLACK_RICE'),
    "card_value" => 4
  ),
  8 => array(
    "card_name" => clienttranslate("LAMB_CHOP"),
    "card_name_tr" => $this->_('LAMB_CHOP'),
    "card_value" => 4
  ),
  9 => array(
    "card_name" => clienttranslate("ROAST_CHICKEN"),
    "card_name_tr" => $this->_('ROAST_CHICKEN'),
    "card_value" => 5
  ),
  10 => array(
    "card_name" => clienttranslate("CATFISH"),
    "card_name_tr" => $this->_('CATFISH'),
    "card_value" => 5
  ),
  11 => array(
    "card_name" => clienttranslate("TUNA"),
    "card_name_tr" => $this->_('TUNA'),
    "card_value" => 6
  ),
  12 => array(
    "card_name" => clienttranslate("SALMON"),
    "card_name_tr" => $this->_('SALMON'),
    "card_value" => 6
  ),
  13 => array(
    "card_name" => clienttranslate("ONIONS"),
    "card_name_tr" => $this->_('ONIONS'),
    "card_value" => 7
  ),
  14 => array(
    "card_name" => clienttranslate("ROASTED_PEANUTS"),
    "card_name_tr" => $this->_('ROASTED_PEANUTS'),
    "card_value" => 7
  ),
  15 => array(
    "card_name" => clienttranslate("RED_BEANS"),
    "card_name_tr" => $this->_('RED_BEANS'),
    "card_value" => 7
  ),
  16 => array(
    "card_name" => clienttranslate("CHICKPEAS"),
    "card_name_tr" => $this->_('CHICKPEAS'),
    "card_value" => 8
  ),
  17 => array(
    "card_name" => clienttranslate("ROASTED_CASHEW"),
    "card_name_tr" => $this->_('ROASTED_CASHEW'),
    "card_value" => 8
  ),
  18 => array(
    "card_name" => clienttranslate("PEPPERS"),
    "card_name_tr" => $this->_('PEPPERS'),
    "card_value" => 8
  ),
  19 => array(
    "card_name" => clienttranslate("LENTILS"),
    "card_name_tr" => $this->_('LENTILS'),
    "card_value" => 9
  ),
  20 => array(
    "card_name" => clienttranslate("MUSHROOMS"),
    "card_name_tr" => $this->_('MUSHROOMS'),
    "card_value" => 9
  ),
  21 => array(
    "card_name" => clienttranslate("ROASTED_ALMONDS"),
    "card_name_tr" => $this->_('ROASTED_ALMONDS'),
    "card_value" => 9
  ),
  22 => array(
    "card_name" => clienttranslate("TOFU"),
    "card_name_tr" => $this->_('TOFU'),
    "card_value" => 10
  ),
  23 => array(
    "card_name" => clienttranslate("CORN"),
    "card_name_tr" => $this->_('CORN'),
    "card_value" => 10
  ),
  24 => array(
    "card_name" => clienttranslate("TEMPEH"),
    "card_name_tr" => $this->_('TEMPEH'),
    "card_value" => 11
  ),
  25 => array(
    "card_name" => clienttranslate("TOMATO"),
    "card_name_tr" => $this->_('TOMATO'),
    "card_value" => 11
  ),
  26 => array(
    "card_name" => clienttranslate("SEAWEED"),
    "card_name_tr" => $this->_('SEAWEED'),
    "card_value" => 12
  ),
  27 => array(
    "card_name" => clienttranslate("SPINACH"),
    "card_name_tr" => $this->_('SPINACH'),
    "card_value" => 12
  )
);

$this->actions_card_names = array(
  1 => array(
    "card_name" => clienttranslate("FILLER"),
    "card_name_tr" => $this->_('FILLER')
  ),
  2 => array(
    "card_name" => clienttranslate("COCKROACH"),
    "card_name_tr" => $this->_('COCKROACH')
  ),
  3 => array(
    "card_name" => clienttranslate("STEAL"),
    "card_name_tr" => $this->_('STEAL')
  )
);
