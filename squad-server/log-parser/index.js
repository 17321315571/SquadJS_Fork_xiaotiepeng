import LogParser from 'core/log-parser';

import AdminBroadcast from './admin-broadcast.js';
import DeployableDamaged from './deployable-damaged.js';
import NewGame from './new-game.js';
import PlayerConnected from './player-connected.js';
import PlayerControllerConnected from './playercontroller-connected.js';
import PlayerDisconnected from './player-disconnected.js';
import PlayerDamaged from './player-damaged.js';
import PlayerDied from './player-died.js';
import PlayerPossess from './player-possess.js';
import PlayerRevived from './player-revived.js';
import PlayerUnPossess from './player-un-possess.js';
import PlayerWounded from './player-wounded.js';
import RoundEnded from './round-ended.js';
import RoundTickets from './round-tickets.js';
import RoundWinner from './round-winner.js';
import ServerTickRate from './server-tick-rate.js';
import AddingClientConnection from './adding-client-connection.js';
import ClientLogin from './client-login.js';
import PendingConnectionDestroyed from './pending-connection-destroyed.js';
import clientExternalAccountInfo from './client-external-account-info.js';
import sendingAuthResult from './sending-auth-result.js';
import loginRequest from './login-request.js';
import joinRequest from './join-request.js';
import checkPermissionResolveEosid from './check-permission-resolve-eosid.js';
export default class SquadLogParser extends LogParser {
  constructor(options) {
    super('SquadGame.log', options);
  }

  getRules() {
    return [
      AdminBroadcast,
      DeployableDamaged,
      NewGame,
      PlayerConnected,
      PlayerControllerConnected,
      PlayerDisconnected,
      PlayerDamaged,
      PlayerDied,
      PlayerPossess,
      PlayerRevived,
      PlayerUnPossess,
      PlayerWounded,
      RoundEnded,
      RoundTickets,
      RoundWinner,
      ServerTickRate,
      AddingClientConnection,
      ClientLogin,
      PendingConnectionDestroyed,
      clientExternalAccountInfo,
      sendingAuthResult,
      loginRequest,
      joinRequest,
      checkPermissionResolveEosid,
    ];
  }
}
