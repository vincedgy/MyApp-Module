MyApp
========

:apple:

App running under NodeJS with Express v4, Less, 
and MongoDB (with mongoose middleware)
The static side is made of AngularJS & BootStrap, and other features. 

All in one for education purpose.

Please check out here : <https://github.com/vincedgy/MyApp-Module>

# Installation

```
npm install
```

# Configuration

This are the extra tools needed in order to use and develop this app :

- git
- bower
- gulp


## git :


Set proxy for http et https :

```
git config --global http.proxy "http://user:password@proxy:tcp"
git config --global https.proxy "http://user:password@proxy:tcp"
git config --global color.ui true
git config --global credential.helper wincred
```

Push the master release to github : 

It will need user/password interactive entry

```
git push --progress origin master --set-upstream
git push --progress origin master:master
```

## bower :

Create .bowerrc in static and add proxy settings as well

static/.bowerrc :

```
{
    "directory": "components",
    "analytics": false,
    "proxy" : "http://user:password@proxy:tcp",
    "https-proxy": "http://user:password@proxy:tcp"
}
```

## gulp

> Complete this part


# TODO

Many thing to do in this app

- [ ] Security 
  - [ ] Implement security modal form
  - [ ] Linked to external account validation (FB, Google)
  - [ ] Audit trail
  - [ ] Separate Admin page
- [ ] Implement drag&drop 
- [X] Animations during transitions
- [X] More modularity

# Considerations

Plan to use this funny guys :

* for NodeJS with Express :
  * lodash : A utility library delivering consistency, customization, performance, & extras. <https://lodash.com>
  * cookie-parser : cookie helper for express <https://github.com/expressjs/cookie-parser>

* for security with node.js : 
  * helmet : for http security <https://www.npmjs.org/package/helmet>
  * passport : Simple, unobtrusive authentication for Node.js <http://passportjs.org/>
  * passport-local : from the previous one for passport's local strategy
  * connect-flash : removed from express4, then...
  * connect-mongo : mongoDB for session storage
