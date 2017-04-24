require('mocha/mocha.css')
require('mocha/mocha.js')
require('chai')

import 'tslib'

import 'fileapi/dist/FileAPI.html5'

import 'rxjs/Observable'
import 'rxjs/observable/dom/AjaxObservable'

import 'rxjs/add/observable/concat'
import 'rxjs/add/observable/defer'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/never'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/combineLatest'
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/mergeAll'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/mergeScan'
import 'rxjs/add/operator/multicast'
import 'rxjs/add/operator/partition'
import 'rxjs/add/operator/repeatWhen'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/single'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/switchMapTo'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/takeUntil'
