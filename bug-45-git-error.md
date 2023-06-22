jerzy@jerzy-jarczynski:~/Documents/kodilla/team/wdp-2306-01$ git add . && git commit -m "Change BrowserRouter to HashRouter, remove useParams from SearchPage"
husky > pre-commit (node v14.18.1)
  ↓ Stashing changes... [skipped]
    → No partially staged files found...
  ❯ Running tasks...
    ❯ Running tasks for src/**/*.js
      ✖ npm run test-related --
        eslint --fix
        prettier --write
        git add



✖ npm run test-related -- found some errors. Please fix them and try committing again.

> pizzeria-portal@0.1.0 test-related /home/jerzy/Documents/kodilla/team/wdp-2306-01
> react-scripts test --watchAll=false --noStackTrace --findRelatedTests "/home/jerzy/Documents/kodilla/team/wdp-2306-01/src/App.js" "/home/jerzy/Documents/kodilla/team/wdp-2306-01/src/components/features/SearchPage/SearchPage.js"

 FAIL  src/components/features/SearchPage/SearchPage.test.js
● Test suite failed to run

  Cannot find module 'react-router-dom/cjs/react-router-dom' from 'FeatureBox.js'

  However, Jest was able to find:
  	'../../common/FeatureBox/FeatureBox.js'
  	'../../common/FeatureBox/FeatureBox.module.scss'
  	'../../common/FeatureBox/FeatureBox.test.js'

  You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'].

  See https://jestjs.io/docs/en/configuration#modulefileextensions-array-string

  However, Jest was able to find:
  	'../FeatureBoxes/FeatureBoxes.js'
  	'../FeatureBoxes/FeatureBoxes.module.scss'
  	'../FeatureBoxes/FeatureBoxes.test.js'

  You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'].

  See https://jestjs.io/docs/en/configuration#modulefileextensions-array-string

  However, Jest was able to find:
  	'./SearchPage.js'
  	'./SearchPage.module.scss'
  	'./SearchPage.test.js'

  You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'].

  See https://jestjs.io/docs/en/configuration#modulefileextensions-array-string

 FAIL  src/App.test.js
● Test suite failed to run

  Cannot find module 'react-router-dom/cjs/react-router-dom' from 'FeatureBox.js'

  However, Jest was able to find:
  	'../../common/FeatureBox/FeatureBox.js'
  	'../../common/FeatureBox/FeatureBox.module.scss'
  	'../../common/FeatureBox/FeatureBox.test.js'

  You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'].

  See https://jestjs.io/docs/en/configuration#modulefileextensions-array-string

  However, Jest was able to find:
  	'../../features/FeatureBoxes/FeatureBoxes.js'
  	'../../features/FeatureBoxes/FeatureBoxes.module.scss'
  	'../../features/FeatureBoxes/FeatureBoxes.test.js'

  You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'].

  See https://jestjs.io/docs/en/configuration#modulefileextensions-array-string

  However, Jest was able to find:
  	'components/views/Homepage/Homepage.js'
  	'components/views/Homepage/Homepage.module.scss'
  	'components/views/Homepage/Homepage.test.js'

  You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'].

  See https://jestjs.io/docs/en/configuration#modulefileextensions-array-string

  However, Jest was able to find:
  	'./App.js'
  	'./App.test.js'

  You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'].

  See https://jestjs.io/docs/en/configuration#modulefileextensions-array-string

Test Suites: 2 failed, 2 total
Tests:       0 total
Snapshots:   0 total
Time:        1.543s
Ran all test suites related to files matching /\/home\/jerzy\/Documents\/kodilla\/team\/wdp-2306-01\/src\/App.js|\/home\/jerzy\/Documents\/kodilla\/team\/wdp-2306-01\/src\/components\/features\/SearchPage\/SearchPage.js/i.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! pizzeria-portal@0.1.0 test-related: `react-scripts test --watchAll=false --noStackTrace --findRelatedTests "/home/jerzy/Documents/kodilla/team/wdp-2306-01/src/App.js" "/home/jerzy/Documents/kodilla/team/wdp-2306-01/src/components/features/SearchPage/SearchPage.js"`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the pizzeria-portal@0.1.0 test-related script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/jerzy/.npm/_logs/2023-06-22T17_30_58_496Z-debug.log
husky > pre-commit hook failed (add --no-verify to bypass)
