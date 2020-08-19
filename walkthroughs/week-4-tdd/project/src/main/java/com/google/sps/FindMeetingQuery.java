// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;
import java.util.Collection; 
import java.util.Collections; 
import java.util.Set;
import java.util.List; 
import java.util.ArrayList; 

public final class FindMeetingQuery {
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    
    Collection<TimeRange> times = new ArrayList<TimeRange>();
    long duration = request.getDuration(); 
    if (duration > 1440) {
      return times;
    }
    else if (request.getAttendees() == null) {
      times.add(TimeRange.fromStartDuration(0,24*60)); 
      return times; 
    } 
    else {
      for (Event event : events) {
        TimeRange eventTR = event.getWhen();
        TimeRange start = TimeRange.fromStartEnd(0, eventTR.start(), false);
        if (!events.contains(eventTR) {
          times.add(start);
        } 
        TimeRange end = TimeRange.fromStartEnd(eventTR.end(), 1440, false);
        if (!events.contains(eventTR)) {
          times.add(end); 
        }
      }
    return times;
    }
    }
  }

