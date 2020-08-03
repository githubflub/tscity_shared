# tscity_shared
This is a repo for code that is needed by frontend and backend repos.

### Installing Watchman
I don't like npm link, so I use a Watchman + WML setup. Here's how to install Watchman on WSL in Windows 10. You can remove the cloned repo after installation completes.

```
sudo apt-get update
sudo apt-get install libssl-dev autoconf automake libtool pkg-config
sudo apt-get install python-dev python-setuptools

git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v4.9.0  # the latest stable release
./autogen.sh
./configure
make
sudo make install
watchman -v

cd ..
rm -r watchman
```

### Installing and setting up WML

```
npm install -g wml

# add the link to wml using `wml add <src> <dest>`
wml add ~/my-package ~/main-project/node_modules/my-package
# start watching all links added
wml start
```