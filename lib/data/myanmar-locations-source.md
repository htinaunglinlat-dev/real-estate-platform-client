# Myanmar search locations

Source: https://github.com/mmhan/nayyar/blob/master/lib/data/locations.csv
Retrieved: 2026-09-10.

This bilingual reference dataset is based on the 2014 census, as documented by
Nayyar. It contains 15 state/region/union-territory entries and 413 township
entries (the source includes sub-township entries). It is not a verified list
of current administrative boundaries. Names and geographic codes are retained
from the source. Bago and Shan use the source's combined-region codes.

The numeric `id` is the source `pcode` with `MMR` removed and converted to a
number. For example Yangon MMR013 becomes 13, and Botahtaung MMR013017 becomes
13017. These are local reference IDs, NOT confirmed backend primary keys.
Search sends these IDs as `region_id` and `township_id`. Seed the backend with
these IDs or replace the `id` and `regionId` fields with its actual mapping
before relying on location-filtered API results. Preserve `pcode` for matching.

## Source license

The MIT License (MIT)

Copyright (c) 2015 mmhan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
