Semantic Versioning

Before you can understand the package-lock and even package.json, you have to understand [semantic versioning] (semver)(http://semver.org/). It’s the genius behind npm, and what has made it more successful. You can read more about how npm uses it here. In a nutshell, if you are building an application with which other applications interface, you should communicate how the changes that you make will affect the third party’s ability to interact with your application. This is done via semantic versioning. A version is made up of three parts: X,Y,Z where those are major, minor and patch versions respectively. An example would be 1.2.3, or major version 1, minor version 2, patch 3. A change in patch represents a bugfix that doesn’t break anything. A change in minor version represents a new functionality that doesn’t break anything. A change in major version represents a large change that breaks compatibility. If users don’t adapt to a major version change, stuff won’t work. [;ref](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8)

Example:  *major.minor.patch* for example *1.2.3*:
- major: A change in major version represents a large change that breaks compatibility.  If users don't adapt to a major version change, functionality will not work.
- minor: A change in minor version represents a new functionality that doesn't break anything
- patch: A change in patch represents a bug-fix that doesn't break anything.
