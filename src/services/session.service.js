const { AppDataSource } = require('../config/data-source');
const { Session } = require('../entities/session.entity');

class SessionService {
  constructor() {
    this.sessionRepository = AppDataSource.getRepository(Session);
  }

  async createSession(sessionData) {
    const session = this.sessionRepository.create(sessionData);
    return await this.sessionRepository.save(session);
  }

  async updateSession(id, sessionData) {
    await this.sessionRepository.update(id, sessionData);
    return await this.sessionRepository.findOneBy({ id });
  }

  async deleteSession(id) {
    await this.sessionRepository.delete(id);
  }
}

module.exports = { SessionService };
