const Deque = require('./deque');

class BrowserHistory {
  #history = new Deque();
  #currentPage = null;

  visit(url) {
    this.#history.addFront(url);
    this.#currentPage = url;
  }

  goBack() {
    if (this.#history.size() > 1) {
      this.#history.removeFront();
      this.#currentPage = this.#history.peekFront();
    }
  }

  goForward() {
    if (this.#currentPage !== this.#history.peekBack()) {
      this.#history.addFront(this.#currentPage);
      this.#currentPage = this.#history.removeFront();
    }
  }

  get currentPage() {
    return this.#currentPage;
  }
}

module.exports = BrowserHistory;
