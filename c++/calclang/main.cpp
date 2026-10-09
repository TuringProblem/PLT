#include <iostream>
#include <string>
#include <string_view>

using std::string;

string hello() { return "Hello, world!\n"; }

std::vector<string_view> create_tokens(const string_view &s) {
  std::vector<string_view> tokens;
  for (auto c : s) {
    if (c == ' ') {
    } else {
      tokens.back().push_back(c);
    }
  }

  return tokens;
}

int main() {
  std::cout << hello();
  std::string_view s = "Hello, world!";

  auto tokens = create_tokens(s);
  for (auto t : tokens) {
    std::cout << t << '\n';
  }

  return 0;
}
